import { Link } from "gatsby"
import React from "react"

const Banner: React.FunctionComponent = () => (
  <div className="sticky top-0 py-4 text-center text-black bg-icterine justify-self-end font-bold font-mono text-xl">
    <Link to="/programs/ctrl-alt-slay">
      In 2025, we’re helping students build their own card-matching games — ready to build yours? 🃏✨
    </Link>
  </div>
)

export default Banner
