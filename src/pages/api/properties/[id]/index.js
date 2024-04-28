import mongoDb from "../../../../config/database";
import Property from "../../../../models/Property";

export default async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        try {
            await mongoDb();
            const property = await Property.findById(id);
            if (!property) {
                return res.status(404).json("property bulunamadı.");
            }
            res.status(200).json(property);
        } catch (error) {
            console.log("error", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}