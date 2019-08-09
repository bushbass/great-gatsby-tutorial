import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

function NotFound() {
  return (
    <div>
      <Layout>
        <Head title="404" />
        <h1>Page not found</h1>
        <p>
          <Link to="/">Try the home page instead</Link>
        </p>
      </Layout>
    </div>
  )
}

export default NotFound
