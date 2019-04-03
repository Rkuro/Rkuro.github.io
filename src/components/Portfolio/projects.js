import tree_3 from "../../media/img/trees3.jpeg";
import tree_0 from "../../media/img/trees0.jpeg";
import tree_1 from "../../media/img/trees1.jpeg";
import tree_2 from "../../media/img/trees2.jpeg";
import wolf from "../../media/img/wolf.jpeg";

let projects = [
    {
        name:"Pathology and Laboratory Medicine",
        description:"Built the front page for the BU Pathology and Laboratory Medicine website",
        // src:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        src:tree_3,
        href:"http://www.bumc.bu.edu/busm-pathology/"
    },
    {
        name:"RAFT Consensys Algorithm",
        description:"Implemented the RAFT distributed consensys algorithm including leader election, " +
            "network partition fault tolerance, and failover using replicated state machines.",
        // src:"https://images.unsplash.com/photo-1517504734587-2890819debab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=864&q=80",
        src:tree_0,
        href:"https://raft.github.io/"
    },
    {
        name:"Agnes",
        description:"Built an events and groups campus application for getting university students more involved with " +
            "their community",
        // src:"https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1208305-thumb.jpg",
        src:tree_1,
        href:"https://www.agnes.io/"
    },
    {
        name:"Agnes Email Dashboard",
        description:"Developed a tool for allowing college students to create and send events via email quickly and responsively",
        // src:"https://images.unsplash.com/photo-1529412828225-7f808a92c04a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2607&q=80",
        src:tree_2,
        href:"https://www.dashboard.agnes.io/"
    },
    {
        name:"Tables",
        description:"Built the frontend for the Tables work ecosystem",
        // src:"https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        src:wolf,
        href:"https://www.tables.work"
    }

]

export default projects