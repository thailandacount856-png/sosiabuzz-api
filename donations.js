let donations = []

module.exports = async (req, res) => {

    if (req.method === "GET") {
        return res.status(200).json({
            status: "success",
            data: donations
        })
    }

    if (req.method === "POST") {

        const body = req.body || {}

        let donator =
            body?.data?.donator_name ||
            body?.username ||
            "Anonymous"

        let amount =
            Number(body?.data?.amount_raw) ||
            Number(body?.price) ||
            0

        donations.unshift({
            donator,
            amount,
            timestamp: Date.now()
        })

        return res.status(200).json({
            success: true
        })
    }

    return res.status(405).json({
        error: "Method not allowed"
    })
}