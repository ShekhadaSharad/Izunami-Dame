"use client";
import React, { useState, useEffect }from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

interface SearchDataItem {
    slug: string;
    title: string;
    content: string;
}
  
const mockSearchData: SearchDataItem[] = [
    {
        slug: "post-1",
        title: "First Post",
        content: "This is the content for the first post."
    },
    {
        slug: "post-2",
        title: "Second Post",
        content: "This is the content sql for the second post."
    },
    {
        slug: "post-3",
        title: "Third Post",
        content: "This is the content for the third post."
    },
    {
        slug: "post-4",
        title: "Forth Post",
        content: "This is the content data for the first post."
    },
    {
        slug: "post-5",
        title: "Fipth Post",
        content: "This is the sql  content for the second post."
    },
    {
        slug: "post-6",
        title: "Sixth Post",
        content: "This sql data is the content for the third post."
    }
];

const NormalSearch: React.FC = () => {
    const [results, setResults] = useState<SearchDataItem[]>([]);

    const search = (keyword: string) => {
        if (!keyword) {
            setResults(mockSearchData);
            return;
          }

        const filteredResults = mockSearchData.filter((item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.content.toLowerCase().includes(keyword.toLowerCase())
        );

        setResults(filteredResults);
    };
    useEffect(() => {
        setResults(mockSearchData);
      }, []); 
    return (
        <div>

            <h1>Normal Search</h1>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => search(e.target.value)}
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="search results table">
                    <TableHead>
                        <TableRow>
                            <TableCell>slug</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Content</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.length > 0 ? (
                            results.map((result) => (
                                <TableRow key={result.slug}>
                                    <TableCell component="th" scope="row">{result.slug}</TableCell>
                                    <TableCell component="th" scope="row">{result.title}</TableCell>
                                    <TableCell align="left">{result.content}</TableCell>
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

export default NormalSearch;