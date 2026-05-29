import ImageComponent from "./components/ImageComponent";
import ListsComponent from "./components/ListsComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import VideoComponent from "./components/VideoComponent";
import { orderedList, pageContent, unorderedList } from "./helpers/variables";

function App() {
  return (
    <main>
      <h1>First react app</h1>
      <ImageComponent
        src={"https://picsum.photos/600/300"}
        alt={"Nature fallback"}
      />
      <VideoComponent
        src={"https://www.w3schools.com/html/mov_bbb.mp4"}
        width="600px"
      />
      <ParagraphsComponent pageContent={pageContent} />
      <ListsComponent orderedList={orderedList} unorderedList={unorderedList} />
    </main>
  );
}

export default App;
