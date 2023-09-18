import connectMongoDB from "@/libs/mongodb";
import Data from "@/models/data";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, age, city } = await request.json();
    await connectMongoDB();
    await Data.create({ name, email, age, city });
    return NextResponse.json({ message: "Data created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const datas = await Data.find();
    return NextResponse.json({ datas })

}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Data.findByIdAndDelete(id);
    return NextResponse.json({message:'Data are Deleted'},{status:200})
}