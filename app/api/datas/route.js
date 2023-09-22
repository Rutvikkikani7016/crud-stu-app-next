import connectMongoDB from "@/libs/mongodb";
import Data from "@/models/data";
import { NextResponse } from "next/server";

// widout using try catch
//export async function POST(request) {
//    const { name, email, age, city } = await request.json();
//    await connectMongoDB();
//    await Data.create({ name, email, age, city });
//    return NextResponse.json({ message: "Data created" }, { status: 201 })
//}

export async function POST(request) {
    try {
        const { name, email, age, city } = await request.json();
        // Connect to MongoDB
        await connectMongoDB();
        // Create data in the database
        await Data.create({ name, email, age, city });

        return NextResponse.json({ message: "Data created" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// widout using try catch
//export async function GET() {
//    await connectMongoDB();
//    const datas = await Data.find();
//    return NextResponse.json({ datas })
//
//}

export const GET = async () => {
    try {
        // Connect to MongoDB
        await connectMongoDB();
        // Retrieve data from the database
        const details = await Data.find();
        // Return the data as a JSON response
        return NextResponse.json({ details });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// widout using try catch
//export async function DELETE(request) {
//    const id = request.nextUrl.searchParams.get('id');
//    await connectMongoDB();
//    await Data.findByIdAndDelete(id);
//    return NextResponse.json({ message: 'Data are Deleted' }, { status: 200 })
//}

export const DELETE = async (request) => {
    try {
        // Extract the 'id' parameter from the query string
        const id = request.nextUrl.searchParams.get('id');
        // Connect to MongoDB
        await connectMongoDB();
        // Delete data from the database by ID
        await Data.findByIdAndDelete(id);
        // Return a success response
        return NextResponse.json({ message: 'Data has been deleted' }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}