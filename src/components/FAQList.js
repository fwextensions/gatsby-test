import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { QnA, Q, A } from "./QnA";

export default function FAQList()
{
	const {
		allContentfulFaq: { nodes }
	} = useStaticQuery(graphql`
		{
			allContentfulFaq(sort: { fields: createdAt, order: ASC }) {
				nodes {
					question
					answer {
						raw
					}
				}
			}
		}
	`);

	return (
		<>
			{nodes.map(({ question, answer: { raw } }, i) => (
				<QnA key={i}>
					<Q>{question}</Q>
					<A>{renderRichText({ raw })}</A>
				</QnA>
			))}
		</>
	);
}
