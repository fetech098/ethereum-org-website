/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

import type { GatsbySSR } from "gatsby"

import Layout from "./src/components/Layout"

import { Context } from "./src/types"

// Prevents <Layout/> from unmounting on page transitions
// https://www.gatsbyjs.com/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
export const wrapPageElement: GatsbySSR<any, Context>["wrapPageElement"] = ({
  element,
  props,
}) => {
  const newElement = React.cloneElement(
    element, // I18nextProvider
    element.props,
    React.cloneElement(
      element.props.children, // I18nextContext.Provider
      element.props.children.props,
      React.createElement(Layout, props, element.props.children.props.children)
    )
  )

  return newElement
}
