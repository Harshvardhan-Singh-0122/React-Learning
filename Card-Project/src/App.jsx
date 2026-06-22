import React from 'react'
import Card from './components/Card'



const cards = [
  {
    date: "20 May, 2023",
    company: "Amazon",
    img: "https://imgs.search.brave.com/OkEKmNpOGwqjMqucY74nAB_p3y2B-LTUnA6ABNTEzVw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/bG9nby1zbWlsZS1p/Y29uLXZlY3Rvci0z/NDI0Mzk4Ny5qcGc",
    post: "Senior UI/UX Designer",
    tag: ["Part Time", "Senior Level", "Project Work"],
    price: "$250 /hr",
    place: "San Francisco, CA",
    color: "#f3bde7"
  },
  {
    date: "12 Jun, 2023",
    company: "Google",
    img: "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    post: "Frontend Developer",
    tag: ["Full Time", "Remote"],
    price: "$180 /hr",
    place: "Mountain View, CA",
    color: "#bb67a9"
  },
  {
    date: "05 Jul, 2023",
    company: "Microsoft",
    img: "https://imgs.search.brave.com/4SD5pUs7CRSxLO2cerY8lGPjhtEcsGwHaXWRUQlr-xU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/bWljcm9zb2Z0LnN2/Zw",
    post: "Software Engineer",
    tag: ["Full Time", "Mid Level", "Hybrid"],
    price: "$220 /hr",
    place: "Seattle, WA",
    color: "#7f4790"
  },
  {
    date: "18 Aug, 2023",
    company: "Netflix",
    img: "https://imgs.search.brave.com/700vSqxoPKPua_7k4kECqcLsJHHCaC5VeVWibAiBvTw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjRiODdlYzc2/YjgyZmIyMWZjZTQu/cG5n",
    post: "Product Designer",
    tag: ["Contract", "Senior Level"],
    price: "$200 /hr",
    place: "Los Angeles, CA",
    color: "#cab38e"
  },
  {
    date: "02 Sep, 2023",
    company: "Apple",
    img: "https://imgs.search.brave.com/2DmGrBqYvYaujtRrapTojqsRIpyIHwGVisoNjHhlmps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYWJi/aXRsb2dvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNi8w/MS9hcHBsZS0xLmpw/Zw",
    post: "iOS Developer",
    tag: ["Full Time", "On Site", "Mid Level"],
    price: "$240 /hr",
    place: "Cupertino, CA",
    color: "#6b5a1d"
  },
  {
    date: "25 Oct, 2023",
    company: "Meta",
    img: "https://imgs.search.brave.com/QpQQaUkD0bIAekvPR1Y9cIRFHxNbH1rwZlIsi2kz2D4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    post: "Backend Developer",
    tag: ["Remote", "Full Time"],
    price: "$230 /hr",
    place: "Menlo Park, CA",
    color: "#5f8e8a"
  },
  {
    date: "11 Nov, 2023",
    company: "Spotify",
    img: "https://imgs.search.brave.com/Aw8qfC1zig6dDiGMBe84XRYVtl2CuFQhQ6nGtSdVTy0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9s/b2dvLW9mLXNwb3Rp/ZnktbXVzaWMtYXBw/LXBuZy1pbWFnZS03/MDE3NTE2OTQ3NzI1/MTY2Z2RkY2x5cTls/LnBuZz92PTIwMjYw/NjIyMDI",
    post: "Data Analyst",
    tag: ["Part Time", "Remote", "Entry Level"],
    price: "$140 /hr",
    place: "New York, NY",
    color: "#959094"
  },
  {
    date: "07 Dec, 2023",
    company: "Adobe",
    img: "https://imgs.search.brave.com/Q0hfc946iRxX1rVFX7i31qMaPZ8yUgRxK69PGOjBi48/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NS9zbWFs/bC9hZG9iZS1sb2dv/LXN0YW5kYXJkLWlj/b24tYXBwLWxvZ28t/ZWRpdGFibGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wcmVt/aXVtLXNvY2lhbC1t/ZWRpYS1kZXNpZ24t/Zm9yLWRpZ2l0YWwt/ZG93bmxvYWQtZnJl/ZS1wbmcucG5n",
    post: "React Developer",
    tag: ["Full Time", "Project Work"],
    price: "$190 /hr",
    place: "San Jose, CA",
    color: "#af4053"
  },
  {
    date: "15 Jan, 2024",
    company: "Uber",
    img: "https://imgs.search.brave.com/6XDdLTicKG3e8s-PV358fiIFTG4bs83nW6LsPs1t-ZY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1Q/aWMucG5n",
    post: "Full Stack Developer",
    tag: ["Hybrid", "Senior Level"],
    price: "$260 /hr",
    place: "Chicago, IL",
    color: "#ca29a7"
  },
  {
    date: "28 Feb, 2024",
    company: "Airbnb",
    img: "https://imgs.search.brave.com/dSihEfoPslnlW4nlzshz8vpe1FzF11A66EZiQcqvD5s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbm91bmNv/bmZvcm1pc3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzEyL2FpcmJuYi1z/cXVhcmUtbG9nby5q/cGc_Zml0PTMwMCwz/MDAmc3NsPTE",
    post: "DevOps Engineer",
    tag: ["Full Time", "Remote", "Senior Level"],
    price: "$270 /hr",
    place: "Austin, TX",
    color: "#82c867"
  },
];


const App = () => {
  return (
    <div className="parent">
      {
        cards.map((ele, idx) =>(
          <Card index = {idx} card = {ele}/>
        ))
      } 
        
    </div>
    
  )
}

export default App