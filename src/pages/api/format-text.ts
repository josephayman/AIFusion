import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: textPrompt(req.body.product),
    max_tokens: 2000,
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function textPrompt(plainText: string) {
  return `Plain Text: 
  The Science of Healthy Hair, Hair Loss and How to Regrow Hair Listen: YouTube | Apple Podcasts | Spotify In this episode, I explain the biology of hair, hair growth, why hair growth slows and what causes hair to stop growing and/or “fall out.” I discuss the essential role of hair stem cells and other supporting biological factors for healthy hair growth. Then I describe various approaches (mechanical and chemical) to slow hair loss by increasing blood flow to hair stem cells, including minoxidil, tadalafil, PRP, microneedling, Botox and ketoconazole treatments. I also discuss how age-related hormone changes cause hair loss and explain the effectiveness of treatments such as caffeine, saw palmetto, growth hormone, finasteride and dutasteride. For all hair growth options, I describe potential side effects, how soon to expect results and the amount of hair regrowth to expect and I highlight effective combination treatments for hair regrowth even in hair “dead” (bald) zones. For many listeners, thinning, brittle hair, or pattern baldness are a source of anxiety and stress. This episode explains the mechanisms underlying hair regrowth tools and the science behind them so that you can evaluate potential treatments and associated side-effect profiles and select the best one(s) for you.
  
Formatted Text:

# The Science of Healthy Hair, Hair Loss and How to Regrow Hair

##### Listen: [YouTube](youtube.com) | [Apple Podcasts](apple.com) | [Spotify](spotify.com) 

In this episode, I explain the biology of hair, hair growth, why hair growth slows and what causes hair to stop growing and/or "fall out." I discuss the essential role of hair stem cells and other supporting biological factors for healthy hair growth. Then I describe various approaches (mechanical and chemical) to slow hair loss by increasing blood flow to hair stem cells, including minoxidil, tadalafil, PRP, microneedling, Botox, and ketoconazole treatments.

I also discuss how **age-related hormone** changes cause hair loss and explain the effectiveness of treatments such as caffeine, saw palmetto, growth hormone, finasteride, and dutasteride. For all hair growth options, I describe potential side effects, how soon to expect results and the amount of hair regrowth to expect and I highlight effective combination treatments for hair regrowth even in hair "dead" (bald) zones.

For many listeners, thinning, brittle hair, or pattern baldness are a source of anxiety and stress. This episode explains the mechanisms underlying hair regrowth tools and the science behind them so that you can evaluate potential treatments and associated side-effect profiles and select the best one(s) for you.
  
  Plain Text: ${plainText}
  Formatted Text:`;
}



