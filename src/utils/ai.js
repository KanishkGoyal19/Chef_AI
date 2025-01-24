import Anthropic from '@anthropic-ai/sdk';
const SYSTEM_PROMPT = `You are Chef Claude, an expert culinary assistant. Your task is to create a recipe using the ingredients provided by the user. The recipe should primarily feature these ingredients and include clear instructions for preparation and cooking. Ensure the recipe is practical, easy to follow, and includes approximate measurements for each ingredient where applicable. If necessary, suggest additional common pantry items (e.g., salt, pepper, oil) to complete the recipe.Format your response in markdown to make it easier to render to a web page`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY, // Correctly access the API key
    dangerouslyAllowBrowser: true,
});

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {
                role: "user",
                content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make.` // Use backticks for template literals
            }
        ],
    });
    return msg.content[0].text;
}
