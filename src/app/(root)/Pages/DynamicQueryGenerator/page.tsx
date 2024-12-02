"use client";
import React, { useState } from 'react';
import Select from 'react-select';

type Option = { value: string; label: string };
type QueryCondition = {
  column: string;
  operator: string;
  value: string;
  condition: string;
};

const columns: Option[] = [
  { value: 'customer_id', label: 'Customer ID' },
  { value: 'first_name', label: 'First Name' },
  { value: 'last_name', label: 'Last Name' },
  { value: 'order_date', label: 'Order Date' },
];

const operators: Option[] = [
  { value: '=', label: '=' },
  { value: '!=', label: '!=' },
  { value: '>', label: '>' },
  { value: '<', label: '<' },
  { value: 'LIKE', label: 'LIKE' },
];

const conditions: Option[] = [
  { value: 'AND', label: 'AND' },
  { value: 'OR', label: 'OR' },
];

const DynamicQueryGenerator: React.FC = () => {
  const [query, setQuery] = useState<QueryCondition[]>([]);
  const [sqlQuery, setSqlQuery] = useState<string>('');

  const addCondition = () => {
    setQuery([...query, { column: '', operator: '=', value: '', condition: 'AND' }]);
  };

  const updateQuery = (index: number, key: string, value: string) => {
    const newQuery = [...query];
   // newQuery[index][key] = value;
    setQuery(newQuery);
  };

  const generateSQLQuery = () => {
    if (query.length === 0) return '';

    const sql = query
      .map((item, index) => {
        const condition = index > 0 ? ` ${item.condition} ` : '';
        return `${condition}${item.column} ${item.operator} '${item.value}'`;
      })
      .join(' ');

    setSqlQuery(`SELECT * FROM Orders WHERE ${sql}`);
  };
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="bg-white rounded shadow-lg px-4 md:p-8 mb-6">
        <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-12">
            <div className="flex items-center justify-center">
              <h1 className="font-bold py-2 px-12 text-2xl">Dynamic SQL Query Generator</h1>
            </div>
            <br />

            {query.map((item, index) => (
              <div key={index} className="query-row mb-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <label htmlFor="column">Select Column</label>
                  <Select
                    options={columns}
                    onChange={(selectedOption) =>
                      updateQuery(index, 'column', selectedOption?.value || '')
                    }
                    placeholder="Select column"
                    className="h-10 mt-1 rounded  w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="operator">Select Operator</label>
                  <Select
                    options={operators}
                    onChange={(selectedOption) =>
                      updateQuery(index, 'operator', selectedOption?.value || '=')
                    }
                    placeholder="Select operator"
                    className="h-10 mt-1 rounded w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="value">Value</label>
                  <input
                    type="text"
                    placeholder="Enter value"
                    onChange={(e) => updateQuery(index, 'value', e.target.value)}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                {index > 0 && (
                  <div className="md:col-span-3">
                    <label htmlFor="condition">Condition</label>
                    <Select
                      options={conditions}
                      onChange={(selectedOption) =>
                        updateQuery(index, 'condition', selectedOption?.value || 'AND')
                      }
                      placeholder="Condition (AND/OR)"
                      className="h-10 mt-1 rounded w-full bg-gray-50"
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="md:col-span-12">
              <button
                type="button"
                onClick={addCondition}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Add Condition
              </button>
              <button
                type="button"
                onClick={generateSQLQuery}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
              >
                Generate SQL Query
              </button>
            </div>
            <div className="md:col-span-12 mt-6">
              <label htmlFor="generatedQuery">Generated SQL Query</label>
              <textarea
                value={sqlQuery}
                readOnly
                className="h-30 border mt-1 rounded px-4 w-full bg-gray-50"
                rows={4}
              />
            </div>
            {/* <div className="md:col-span-12 text-center mt-4">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-12 rounded"
              >
                Execute SQL Query
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicQueryGenerator;