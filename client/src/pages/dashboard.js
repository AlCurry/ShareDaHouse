import React from "react";
import TextDisplay from "../components/TextDisplay";
import AddBox from "./components/addbox";

const DashboardPage = () => {
  return (
    <div className="page">
      <AddBox/>
      <TextDisplay title="Dashboard" subtitle="project finished">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab
        magnam nesciunt dolore unde eaque minima consequuntur dolores, inventore
        voluptatum exercitationem sed doloremque numquam expedita! Reiciendis
        eos illo ut assumenda, recusandae dolorum libero neque quisquam.
        Necessitatibus natus id eligendi est ipsum doloremque dolores
        repellendus facere tenetur, temporibus laceat corporis inventore uldlam
        perferendis reprehenderit, labore voluptate ipsam! Consequatur alias
        quos saepe, nulla cum sequi temporibus magni minima consectetur adipisci
        reiciendis sit nobis praesentium quibusdam repellat incidunt voluptas,
        iste at dicta laboriosam, delectus ab autem ad. Architecto quisquam illo
        eos vel, molestias minus at non, iure! Tempore qui sint magni ipsam
        cumque reiciendis fugiat, nesciunt, aliquam, corrupti nemo repudiandae
        pariatur nostrum placeat molestias quas mollitia minus fugit doloremque
        excepturi! Officia debitis ipsum laborum odio, suscipit earum!
        Laudantium similique dolore impedit, quod repellat ipsum blanditiis
        quisquam odit ducimus perferendis, iure incidunt nemo voluptates,
        veritatis velit tempora nulla autem. Dignissimos blanditiis, dolores
        repudiandae rerum libero placeat, excepturi voluptatibus minima dolore
        odio aliquid. Eaque, est iusto voluptatibus velit. Perspiciatis ipsa
        aliquid repellat eveniet placeat velit dolores suscipit nesciunt minus
        alias debitis quas praesentium natus cupiditate veniam quae, soluta
        expedita autem hic, quibusdam est! Fugit nisi omnis reiciendis amet
        officia quae nulla minus sapiente earum ullam."
      </TextDisplay>
    </div>
  );
};

export default DashboardPage;
