"use client"

import React, { useEffect, useState } from 'react';
import DataGrid from "@/app/(root)/data-grid/data-table"

const searchFields = [
  { label: "MainEngID", dataType: "string", fieldName: "MainEngId" },
  { label: "Plaintiff", dataType: "string", fieldName: "Plaintiff" },
  { label: "Defendant", dataType: "string", fieldName: "Defendant" },
  { label: "Last Name Atty/Rep", dataType: "string", fieldName: "AttyLastName,RepLastName" },
  { label: "File No", dataType: "string", fieldName: "FileNo" },
  { label: "Firm/Insurer Name", dataType: "string", fieldName: "FirmName,InsName" },
  { label: "Comment", dataType: "string", fieldName: "CaseDescr" },
  { label: "Status", dataType: "string", fieldName: "StatusId" },
  { label: "Report Date", dataType: "date", fieldName: "AssignLetDate" },
  { label: "Affidavit Date", dataType: "date", fieldName: "AffidavitDate" },
  { label: "Accident Date", dataType: "date", fieldName: "AccDate" },
  { label: "Accident Address", dataType: "string", fieldName: "AccAddr" },
  { label: "Accident City", dataType: "string", fieldName: "AccCity" },
  { label: "Accident State", dataType: "string", fieldName: "AccSt" },
  { label: "Address Firm/Ins", dataType: "string", fieldName: "FirmAddr,FirmAddr2,InsAddr,InsAddr2" },
  { label: "City Firm/Ins", dataType: "string", fieldName: "FirmCity,InsCity" },
  { label: "State Firm/Ins", dataType: "string", fieldName: "FirmSt,InsSt" },
  { label: "Zip Code Firm/Ins", dataType: "string", fieldName: "FirmZip,InsZip" },
  { label: "Phone Firm/Ins", dataType: "string", fieldName: "FirmPhone,InsPhone" },
  { label: "First Name Atty/Rep", dataType: "string", fieldName: "AttyFirstName,RepFirstName" },
  { label: "Phone Atty/Rep", dataType: "string", fieldName: "AttyPhone,RepPhone" },
  { label: "Atty File No", dataType: "string", fieldName: "AttyFileNo" },
  { label: "Ins Claim No", dataType: "string", fieldName: "ClaimNo" },
  { label: "Received Date", dataType: "date", fieldName: "RcvdDate" },
  { label: "Party", dataType: "string", fieldName: "OurClient" },
  { label: "Assoc. Engineer", dataType: "string", fieldName: "AssocEngId" },
  { label: "Assoc. Engineer 2", dataType: "string", fieldName: "AssocEngId2" },
  { label: "Engineer Assigned", dataType: "string", fieldName: "MainEngId,AssocEngId,AssocEngId2" },
  { label: "Payer", dataType: "string", fieldName: "Payee" },
  { label: "Opposing Expert", dataType: "string", fieldName: "OpposingExpert1,OpposingExpert2,OpposingExpert3" },
  { label: "A/R Notes", dataType: "string", fieldName: "InvoiceNotes" },
  { label: "Notes", dataType: "string", fieldName: "Comments" },
  { label: "Evidence Description", dataType: "string", fieldName: "EvidenceDescription" },
  { label: "Evidence Status", dataType: "string", fieldName: "EvidenceStatus" },
  { label: "Type Of Case", dataType: "string", fieldName: "TypeOfCase" },
  { label: "Amount Of Invoice", dataType: "numeric", fieldName: "Total" },
  { label: "Keyword", dataType: "string", fieldName: "Keyword" },
];

interface Row {
  name: string;
  isActive: boolean;
  [key: string]: any;
}

interface Action {
  title: string;
  icon: string;
  cssClass: string;
}

interface GridConfig {
  columnDef: { data: string; label: string; dataType: string }[];
  rowData: Row[];
  actions: Action[];
  pagination?: boolean;
  totalRecord: number;
  pageNo: number;
}

interface SearchCasesResponse {
  result: any;
}

const gridConfig: GridConfig = {
  columnDef: [
    { data: 'FileNo', label: 'File Number', dataType: 'STRING' },
    { data: 'MainEngID', label: 'Main Eng', dataType: 'STRING' },
    { data: 'Plaintiff', label: 'Plaintiff', dataType: 'STRING' },
    { data: 'Defendant', label: 'Defendant', dataType: 'STRING' },
    { data: 'AttyLastName', label: 'Atty Last Name ', dataType: 'STRING' },
    { data: 'RepLastName', label: 'Rep Last Name', dataType: 'STRING' },
    { data: 'AttyFirstName', label: 'First Name Atty/Rep', dataType: 'STRING' },
    { data: 'RepFirstName', label: 'First Name', dataType: 'STRING' },
    { data: 'InsName', label: 'Insurance Co Name', dataType: 'STRING' },
    { data: 'Comments', label: 'Comments', dataType: 'STRING' },
    { data: 'FirmName', label: 'Firm/Insurer Name', dataType: 'STRING' },
    { data: 'AccCity', label: 'Accident City', dataType: 'STRING' },
    { data: 'AccDate', label: 'Accident Date', dataType: 'DATE' },
    { data: 'CaseType', label: 'Case Type', dataType: 'STRING' },
    { data: 'LitigativeClaim', label: 'Litigative Claim', dataType: 'STRING' },
    { data: 'RcvdDate', label: 'Received Date', dataType: 'DATE' },
    { data: 'StatusDescrip', label: 'Status', dataType: 'STRING' },
    { data: 'TypeOfCase', label: 'Type of Case', dataType: 'STRING' }
  ],
  rowData: [],
  actions: [
    { title: 'Edit', icon: 'fa-edit', cssClass: 'btn-primary' },
    { title: 'Delete', icon: 'fa-trash', cssClass: 'btn-danger' }
  ],
  pagination: true,
  totalRecord: 0,
  pageNo: 1,
};

export default function Employees() {
  const [selectValue1, setselectValue1] = useState<string>('');
  const [selectValue2, setselectValue2] = useState<string>('');
  const [selectValue3, setselectValue3] = useState<string>('');
  const [selectValue4, setselectValue4] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gridData, setGridData] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search1, setSearch1] = useState<string>('');
  const [search2, setSearch2] = useState<string>('');
  const [search3, setSearch3] = useState<string>('');
  const [search4, setSearch4] = useState<string>('');

  useEffect(() => {

    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/employee-add-edit');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        if (data && data.result) {
          setGridData(data.result);
        }
        console.log("Response is this:", data);

      } catch (error) {
        console.error("Error fetching employees:", error);
        setError("Failed to load data.");
      }
    };

    fetchEmployees();
  }, []);
  const searchCases = async (searchTerm: Employee ): Promise<SearchCasesResponse | void> => {
    try {
      const response = await fetch("/api/employee-add-edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchTerm),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data: SearchCasesResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching search cases:", error);
    }
  };

  const onPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(gridData.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const onActionClick = (row: Row, action: string): void => {
    console.log(`Action: ${action} on row`, row);
  };

  const rowsPerPage = 10;
  const paginatedData = gridData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const paginatedGridConfig = { ...gridConfig, rowData: paginatedData, totalRecord: gridData.length };

  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearch1(event.target.value as string);
  };

  const handleListChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectValue1(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearch2(event.target.value as string);

  };

  const handleListChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectValue2(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearch3(event.target.value as string);
  };

  const handleListChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectValue3(event.target.value);
  };

  const handleChange4 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearch4(event.target.value as string);
  };

  const handleListChange4 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectValue4(event.target.value);
  };

  const fetchData = async () => {
    const searchTerms: Employee = {
      searchTerm1: search1,
      searchTerm2: search2,
      searchTerm3: search3,
      searchTerm4: search4,
      searchListTerm1: selectValue1,
      searchListTerm2: selectValue2,
      searchListTerm3: selectValue3,
      searchListTerm4: selectValue4,
    };

    const data = await searchCases(searchTerms);

    if (data && data.result) {
      setGridData(data.result);
    }
  };

  const clearSearch = async () => {
    setSearch1("");
    setSearch2("");
    setSearch3("");
    setSearch4("");

  };

  const fullClearSearch = async () => {
    setSearch1("");
    setSearch2("");
    setSearch3("");
    setSearch4("");

    setselectValue1("");
    setselectValue2("");
    setselectValue3("");
    setselectValue4("");

  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-12">

              <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="demo-multiple-name" className="whitespace-nowrap text-gray-700 font-medium">
                      Field 1
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1 ">
                      {error && <p className="text-red-500">{error}</p>}
                      <select
                        id="demo-multiple-name"
                        value={selectValue1}
                        onChange={handleListChange1}
                        className="w-80 px-4 py-2 border rounded text-gray-800 bg-transparent appearance-none outline-none border-gray-600">
                        <option value="" disabled>
                        </option>
                        {searchFields.map((field) => (
                          <option key={field.label} value={field.label}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-1">
                    <div className="h-10 bg-gray-50 flex border  border-gray-600 rounded items-center">
                      <input
                        id="Vaue"
                        name="Vaue"
                        value={search1}
                        onChange={handleChange1}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <button
                    type="submit"
                    onClick={fetchData}
                    className="h-10 border mt-1 rounded px-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold">
                    Search
                  </button>
                </div>
              </div>

              <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="demo-multiple-name" className="whitespace-nowrap text-gray-700 font-medium">
                      Field 2
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1 ">
                      {error && <p className="text-red-500">{error}</p>}
                      <select
                        id="demo-multiple-name"
                        value={selectValue2}
                        onChange={handleListChange2}
                        className="w-80 px-4 py-2 border rounded text-gray-800 bg-transparent appearance-none outline-none border-gray-600"
                      >
                        <option value="" disabled>
                        </option>
                        {searchFields.map((field) => (
                          <option key={field.label} value={field.label}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 bg-gray-50 flex border border-gray-600 rounded items-center ">
                      <input
                        id="Vaue"
                        name="Vaue"
                        value={search2}
                        onChange={handleChange2}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent "
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <button
                    type="submit"
                    onClick={clearSearch}
                    className="h-10 border mt-1 rounded px-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                    Clear Search
                  </button>
                </div>
              </div>

              <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="demo-multiple-name" className="whitespace-nowrap text-gray-700 font-medium">
                      Field 3
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      {error && <p className="text-red-500">{error}</p>}
                      <select
                        id="demo-multiple-name"
                        value={selectValue3}
                        onChange={handleListChange3}
                        className="w-80 px-4 py-2 border rounded text-gray-800 bg-transparent appearance-none outline-none border-gray-600"
                      >
                        <option value="" disabled>
                        </option>
                        {searchFields.map((field) => (
                          <option key={field.label} value={field.label}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 bg-gray-50 flex border  border-gray-600 rounded items-center">
                      <input
                        id="Vaue"
                        name="Vaue"
                        value={search3}
                        onChange={handleChange3}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <button
                    type="submit"
                    onClick={fullClearSearch}
                    className="h-10 border mt-1 rounded px-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold"
                  >
                    Full Clear Search
                  </button>
                </div>
              </div>

              <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="demo-multiple-name" className="whitespace-nowrap text-gray-700 font-medium">
                      Field 4
                    </label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1 ">
                      {error && <p className="text-red-500">{error}</p>}
                      <select
                        id="demo-multiple-name"
                        value={selectValue4}
                        onChange={handleListChange4}
                        className="w-80 px-4 py-2 border rounded text-gray-800 bg-transparent appearance-none outline-none border-gray-600"
                      >
                        <option value="" disabled>
                        </option>
                        {searchFields.map((field) => (
                          <option key={field.label} value={field.label}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 bg-gray-50 flex border  border-gray-600 rounded items-center">
                      <input
                        id="Vaue"
                        name="Vaue"
                        value={search4}
                        onChange={handleChange4}
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <DataGrid
          gridConfig={paginatedGridConfig}
          onActionClick={onActionClick}
          onPageChange={onPageChange}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </>
  );
};