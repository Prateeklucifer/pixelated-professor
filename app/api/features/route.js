import ConnectToDB from '@/DB/ConnectToDB'
import Features from '@/schema/Features'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        ConnectToDB()
        let allEntries = await Features.find({})

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await Features.create({ title: "Build a strong foundation", paragraph: "Our curriculum starts with the core concepts of computer science, like data structures, algorithms, and object-oriented programming. Gain a solid understanding of these crucial building blocks before diving into more advanced topics." }, { title: "Explore In-Demand Skills", paragraph: "Learn the most relevant technologies for today's job market. Take courses in Full Stack Development, covering both front-end (HTML, CSS, JavaScript) and back-end (Python, Java, databases) development." }, { title: "Learn at Your Pace", paragraph: "Whether you're a beginner or a seasoned programmer, we offer a variety of learning formats. Choose from interactive video lectures, hands-on coding exercises, and self-paced study materials." }, { title: "Future-proof your career", paragraph: " Technology evolves rapidly. We offer constantly updated courses and resources to keep you ahead of the curve. Learn about the newest frameworks, languages, and industry best practices." })

            let allData = await Features.find({})

            return NextResponse.json({data: allData})
        }else{
            return NextResponse.json({data: allEntries})
        }

    } catch (err) {
        return NextResponse.json({ message: "something went wrong" }, {status: 500})
    }
}
