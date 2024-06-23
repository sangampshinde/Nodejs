const dbConnect = require('../mongodb');

const insert = async () => {
    const db = await dbConnect();

    

    // const result = await db.insertMany([
    //     { name: 'max 2', brand: 'micromax', price: 10000, category: 'mobile' },
    //     { name: 'max 3', brand: 'micromax', price: 12000, category: 'mobile' },
    //     { name: 'max 4', brand: 'micromax', price: 13000, category: 'mobile' }
    // ]);

    const result = await db.insertOne(
        {name: 'max 5', brand: 'micromax', price: 15000, category: 'mobile'}

    )
    if (result.acknowledged) {
        console.log("data inserted");
    }
};

insert();
