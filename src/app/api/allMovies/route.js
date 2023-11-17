import clientDB from "@/app/utilities/db.config";
import { NextResponse } from "next/server";



export async function GET(req, res) {
    try {
        const db = clientDB.db('movieMagic');
        const movieCollection = db.collection('allMovies');
        const result = await movieCollection.find().toArray();
        return NextResponse.json(
            { message: "all movies get successfully",
             result: result
             },
            { status: 200 },
            { result }
        )

    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Server Error, please try again" },
            { status: 500 }
        )
    }
}