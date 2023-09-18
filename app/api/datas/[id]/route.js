import connectMongoDB from "@/libs/mongodb";
import Data from "@/models/data";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name, newEmail: email, newAge: age, newCity: city } = await request.json();
    await connectMongoDB();
    await Data.findByIdAndUpdate(id, { name, email, age, city })
    return NextResponse.json({ message: 'Data Updeted' }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const data = await Data.findOne({ _id: id });
    return NextResponse.json({ data }, { status: 200 })
}