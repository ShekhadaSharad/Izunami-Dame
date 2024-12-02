import { NextResponse,NextRequest } from "next/server"
import prisma from "@/lib/dbConnection"
import lunr from 'lunr';

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { Name, Email,City } = res;
  
    try {
      const result = await prisma.employee.create({
        data: {
          Name,
          Email,
          City,
        },
      });
      return NextResponse.json({ result });
    } catch (error) {
      return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}

export const GET = async () => {
    try {
      const users = await prisma.user.findMany();
      return NextResponse.json({ users });
    } catch (error) {
      return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
};

export const ExecuteQuery = async (request: NextRequest) => {
  try {
    const res = await request.json();
    const { keyword } = res;

    const users = await prisma.employees.findMany();

    const result = SearchIndex.search(keyword)
      .map((result: any) => {
        const post = users.find((post) => post.id === result.ref);
        return post ? { ...post, score: result.score } : null;
      })
      .filter((result : any) => result !== null)
      .sort((a : any , b: any) => b.score - a.score);

    console.log(result);

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
  }
};

export const SearchIndex = lunr(function (searchdata : any) {
  this.ref('id');
  this.field('title');
  this.field('description');

  for (let i = 0; i < searchdata.length; i++) {
    this.add(searchdata[i]);
  }
});

