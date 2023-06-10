import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const OPENAI_API_ORG = process.env.REACT_APP_OPENAI_API_ORG;

const configuration = new Configuration({
  apiKey,
  //orgId: OPENAI_API_ORG,
});

const openai = new OpenAIApi(configuration);

export default function ImageGeneratorOpenAI(prompt) {
  const params = {
    prompt: "Monaliza geek",
    max_tokens: 1,
    size: "1024x1024",
  };

  const response = openai.createImage(params);
  console.log(response);
}
