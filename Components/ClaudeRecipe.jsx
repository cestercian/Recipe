import GradientText from './GradientText'



import Markdown from "react-markdown";
export default function ClaudeRecipe(props) {
    return (
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
        >
            <section className="suggested-recipe-container">
                <h2>Chef Claude Recommends:</h2>
                <Markdown>
                    {props.recipe}
                </Markdown>
            </section>
        </GradientText>
    )
}