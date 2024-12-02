
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-gray-800 p-6 bg-gray-200">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-full">
        <div className="flex items-center p-8 bg-white drop-shadow-xl rounded-lg">
          <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-lg">
            <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div className="flex-grow flex flex-col ml-4">
            <span className="text-xl font-bold">$8,430</span>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Revenue last 30 days</span>
              <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white drop-shadow-xl rounded-lg">
          <div class="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded-lg">
            <svg class="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">211</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Sales last 30 days</span>
              <span class="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white drop-shadow-xl rounded-lg">
          <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-lg">
            <svg class="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">140</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Customers last 30 days</span>
              <span class="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white drop-shadow-xl rounded-lg">
          <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-lg">
            <svg class="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">140</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Customers last 30 days</span>
              <span class="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard




// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { getSession } from "@/lib/getSession";
// import { redirect } from "next/navigation";

// const Dashboard = async () => {
//   const session = await getSession();
//   const user = session?.user;
//   if (!user) return redirect("/");

//   return (
//     <div className="flex min-h-screen">
//       <div className="flex-1 bg-gray-100 dark:bg-gray-950">
//         <div className="p-6 grid gap-6">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Total Revenue
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$45,231.87</div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   +20.1% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Subscriptions
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+2350</div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   +180.1% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">Sales</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+12,234</div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   +19% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Active Now
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+573</div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   +201 since last hour
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="grid gap-6">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Recent Signups
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Email</TableHead>
//                       <TableHead>Plan</TableHead>
//                       <TableHead>Date</TableHead>
//                     </TableRow>
//                   </TableHeader>

//                   <TableBody>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>John Doe</TableCell>
//                       <TableCell>john@example.com</TableCell>
//                       <TableCell>Pro</TableCell>
//                       <TableCell>2024-04-16</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
