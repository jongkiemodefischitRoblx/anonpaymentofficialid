export default async function handler(req, res) {
    const { id } = req.query;
    if(!id) return res.status(400).json({status:"ERROR", message:"Missing invoice id"});

    try {
        const response = await fetch(`https://api.pakasir.com/anon-payment/qris/status?id=${id}`, {
            headers: { "apikey": "lPOX2W6MqhFETsfkvVwfBTjDNUlsj1xK" }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch(err){
        console.error(err);
        res.status(500).json({status:"ERROR", message:"Server proxy failed"});
    }
}
