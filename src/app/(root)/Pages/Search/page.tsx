"use client";

import React, { useState } from 'react';
import lunr from 'lunr';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';

interface post{
  id: string;
  title: string;
  description: string;
  score?: number;
}

const postsData = [
	{
		id: "1",
		title: "What is JavaScript?",
		description:"JavaScript is a high-level, object-oriented programming language based on the ECMAScript specification.",
	},
	{
		id: "2",
		title: "What is Java?",
		description:"Java is a cross-platform object-oriented programming language which at first developed by the Sun Microsystems.",
	},
	{
		id: "3",
		title: "What is React?",
		description:"React is a popular JavaScript library which heavily used to build single-page applications.",
	},
]

const Search: React.FC = ({ }) => {
  const [results, setResults] = useState<post[]>(postsData);

  const search = (keyword : string) => {
    if (keyword === "") {
      setResults(postsData);
      return;
    }

    const idx = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('description');

      for (let i = 0; i < postsData.length; i++) {
        this.add(postsData[i]);
      }
    });

    const resultMeta = idx.search(keyword)
      .map((result: any) => {
        const post = postsData.find((post) => post.id === result.ref);
        return post ? { ...post, score: result.score } : null;
      })
      .filter((result : any) => result !== null)
      .sort((a : any , b: any) => b.score - a.score);

    console.log(resultMeta);
    setResults(resultMeta as post[]);
  };

  const handleSubmit = async(keyword : string) => {
  
    try {
      await fetch('/api/employee-add-edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyword)
      })

    } catch (error) {
      console.error(error)
    }
  };  

  return (
    <div>
      <h1>Full-Text Search</h1>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => handleSubmit(e.target.value)}
        margin="normal"
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="search results table">
          <TableHead>
            <TableRow>
              <TableCell>Slug</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="left">Content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.length > 0 ? (
              results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {result.id}
                  </TableCell>
                  <TableCell>{result.title}</TableCell>
                  <TableCell align="left">{result.description}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No Results Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Search;