import connectMongoDB from "@/libs/mongodb";
import Data from "@/models/data";
import { NextResponse } from "next/server";

// widout using try catch
//export async function PUT(request, { params }) {
//    const { id } = params;
//    const { newName: name, newEmail: email, newAge: age, newCity: city } = await request.json();
//    await connectMongoDB();
//    await Data.findByIdAndUpdate(id, { name, email, age, city })
//    return NextResponse.json({ message: 'Data Updeted' }, { status: 200 })
//}

export const PUT = async (request, { params }) => {
    try {
        // Extract the 'id' parameter from the URL params
        const { id } = params;
        // Destructure the new data from the request JSON body
        const { newName: name, newEmail: email, newAge: age, newCity: city } = await request.json();
        // Connect to MongoDB
        await connectMongoDB();
        // Update data in the database by ID
        await Data.findByIdAndUpdate(id, { name, email, age, city });
        // Return a success response
        return NextResponse.json({ message: 'Data has been updated' }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// widout using try catch
//export async function GET(request, { params }) {
//    const { id } = params;
//    await connectMongoDB();
//    const data = await Data.findOne({ _id: id });
//    return NextResponse.json({ data }, { status: 200 })
//}

export const GET = async (request, { params }) => {
    try {
        // Extract the 'id' parameter from the URL params
        const { id } = params;
        // Connect to MongoDB
        await connectMongoDB();
        // Find data in the database by ID
        const data = await Data.findOne({ _id: id });
        // Return the data as a JSON response
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};