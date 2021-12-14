import { runSummarize } from 'simple-text-summarizer'

export const sumarize = async (req, res) =>{
    // const { text } = req.body

    // const summarizedText = runSummarize(text)

    console.log(req.body)

    res.send('send')
}