import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
   // const [pageInfo, setPageInfo] = useState();
   const [locList, setLocList] = useState();

   useEffect(() => {
      // axios
      //    .get("https://rickandmortyapi.com/api/location")
      //    .then(response => {
      //       // setPageInfo(response.data.info);
      //       setLocList(response.data.results);
      //    })
      //    .catch(error => {
      //       console.error('Server Error', error);
      //    });
      setLocList([
         {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "residents": [
               "https://rickandmortyapi.com/api/character/38",
               "https://rickandmortyapi.com/api/character/45",
               "https://rickandmortyapi.com/api/character/71",
               "https://rickandmortyapi.com/api/character/82",
               "https://rickandmortyapi.com/api/character/83",
               "https://rickandmortyapi.com/api/character/92",
               "https://rickandmortyapi.com/api/character/112",
               "https://rickandmortyapi.com/api/character/114",
               "https://rickandmortyapi.com/api/character/116",
               "https://rickandmortyapi.com/api/character/117",
               "https://rickandmortyapi.com/api/character/120",
               "https://rickandmortyapi.com/api/character/127",
               "https://rickandmortyapi.com/api/character/155",
               "https://rickandmortyapi.com/api/character/169",
               "https://rickandmortyapi.com/api/character/175",
               "https://rickandmortyapi.com/api/character/179",
               "https://rickandmortyapi.com/api/character/186",
               "https://rickandmortyapi.com/api/character/201",
               "https://rickandmortyapi.com/api/character/216",
               "https://rickandmortyapi.com/api/character/239",
               "https://rickandmortyapi.com/api/character/271",
               "https://rickandmortyapi.com/api/character/302",
               "https://rickandmortyapi.com/api/character/303",
               "https://rickandmortyapi.com/api/character/338",
               "https://rickandmortyapi.com/api/character/343",
               "https://rickandmortyapi.com/api/character/356",
               "https://rickandmortyapi.com/api/character/394"
            ],
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
         },
         {
            "id": 2,
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown",
            "residents": [
               "https://rickandmortyapi.com/api/character/6"
            ],
            "url": "https://rickandmortyapi.com/api/location/2",
            "created": "2017-11-10T13:06:38.182Z"
         },
         {
            "id": 3,
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "unknown",
            "residents": [
               "https://rickandmortyapi.com/api/character/8",
               "https://rickandmortyapi.com/api/character/14",
               "https://rickandmortyapi.com/api/character/15",
               "https://rickandmortyapi.com/api/character/18",
               "https://rickandmortyapi.com/api/character/21",
               "https://rickandmortyapi.com/api/character/22",
               "https://rickandmortyapi.com/api/character/27",
               "https://rickandmortyapi.com/api/character/42",
               "https://rickandmortyapi.com/api/character/43",
               "https://rickandmortyapi.com/api/character/44",
               "https://rickandmortyapi.com/api/character/48",
               "https://rickandmortyapi.com/api/character/53",
               "https://rickandmortyapi.com/api/character/56",
               "https://rickandmortyapi.com/api/character/61",
               "https://rickandmortyapi.com/api/character/69",
               "https://rickandmortyapi.com/api/character/72",
               "https://rickandmortyapi.com/api/character/73",
               "https://rickandmortyapi.com/api/character/74",
               "https://rickandmortyapi.com/api/character/77",
               "https://rickandmortyapi.com/api/character/78",
               "https://rickandmortyapi.com/api/character/85",
               "https://rickandmortyapi.com/api/character/86",
               "https://rickandmortyapi.com/api/character/95",
               "https://rickandmortyapi.com/api/character/118",
               "https://rickandmortyapi.com/api/character/119",
               "https://rickandmortyapi.com/api/character/123",
               "https://rickandmortyapi.com/api/character/135",
               "https://rickandmortyapi.com/api/character/143",
               "https://rickandmortyapi.com/api/character/152",
               "https://rickandmortyapi.com/api/character/164",
               "https://rickandmortyapi.com/api/character/165",
               "https://rickandmortyapi.com/api/character/187",
               "https://rickandmortyapi.com/api/character/200",
               "https://rickandmortyapi.com/api/character/206",
               "https://rickandmortyapi.com/api/character/209",
               "https://rickandmortyapi.com/api/character/215",
               "https://rickandmortyapi.com/api/character/220",
               "https://rickandmortyapi.com/api/character/229",
               "https://rickandmortyapi.com/api/character/231",
               "https://rickandmortyapi.com/api/character/235",
               "https://rickandmortyapi.com/api/character/267",
               "https://rickandmortyapi.com/api/character/274",
               "https://rickandmortyapi.com/api/character/278",
               "https://rickandmortyapi.com/api/character/281",
               "https://rickandmortyapi.com/api/character/283",
               "https://rickandmortyapi.com/api/character/284",
               "https://rickandmortyapi.com/api/character/285",
               "https://rickandmortyapi.com/api/character/286",
               "https://rickandmortyapi.com/api/character/287",
               "https://rickandmortyapi.com/api/character/288",
               "https://rickandmortyapi.com/api/character/289",
               "https://rickandmortyapi.com/api/character/291",
               "https://rickandmortyapi.com/api/character/294",
               "https://rickandmortyapi.com/api/character/295",
               "https://rickandmortyapi.com/api/character/298",
               "https://rickandmortyapi.com/api/character/299",
               "https://rickandmortyapi.com/api/character/322",
               "https://rickandmortyapi.com/api/character/325",
               "https://rickandmortyapi.com/api/character/328",
               "https://rickandmortyapi.com/api/character/330",
               "https://rickandmortyapi.com/api/character/345",
               "https://rickandmortyapi.com/api/character/359",
               "https://rickandmortyapi.com/api/character/366",
               "https://rickandmortyapi.com/api/character/378",
               "https://rickandmortyapi.com/api/character/385",
               "https://rickandmortyapi.com/api/character/389",
               "https://rickandmortyapi.com/api/character/461",
               "https://rickandmortyapi.com/api/character/462",
               "https://rickandmortyapi.com/api/character/463",
               "https://rickandmortyapi.com/api/character/464",
               "https://rickandmortyapi.com/api/character/465",
               "https://rickandmortyapi.com/api/character/466",
               "https://rickandmortyapi.com/api/character/472",
               "https://rickandmortyapi.com/api/character/473",
               "https://rickandmortyapi.com/api/character/392",
               "https://rickandmortyapi.com/api/character/474",
               "https://rickandmortyapi.com/api/character/475",
               "https://rickandmortyapi.com/api/character/476",
               "https://rickandmortyapi.com/api/character/477",
               "https://rickandmortyapi.com/api/character/478",
               "https://rickandmortyapi.com/api/character/479",
               "https://rickandmortyapi.com/api/character/480",
               "https://rickandmortyapi.com/api/character/481",
               "https://rickandmortyapi.com/api/character/482",
               "https://rickandmortyapi.com/api/character/483",
               "https://rickandmortyapi.com/api/character/484",
               "https://rickandmortyapi.com/api/character/485",
               "https://rickandmortyapi.com/api/character/486",
               "https://rickandmortyapi.com/api/character/487",
               "https://rickandmortyapi.com/api/character/488",
               "https://rickandmortyapi.com/api/character/489"
            ],
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
         },
         {
            "id": 4,
            "name": "Worldender's lair",
            "type": "Planet",
            "dimension": "unknown",
            "residents": [
               "https://rickandmortyapi.com/api/character/10",
               "https://rickandmortyapi.com/api/character/81",
               "https://rickandmortyapi.com/api/character/208",
               "https://rickandmortyapi.com/api/character/226",
               "https://rickandmortyapi.com/api/character/382",
               "https://rickandmortyapi.com/api/character/340",
               "https://rickandmortyapi.com/api/character/362",
               "https://rickandmortyapi.com/api/character/375",
               "https://rickandmortyapi.com/api/character/395"
            ],
            "url": "https://rickandmortyapi.com/api/location/4",
            "created": "2017-11-10T13:08:20.569Z"
         },
         {
            "id": 5,
            "name": "Anatomy Park",
            "type": "Microverse",
            "dimension": "Dimension C-137",
            "residents": [
               "https://rickandmortyapi.com/api/character/12",
               "https://rickandmortyapi.com/api/character/17",
               "https://rickandmortyapi.com/api/character/96",
               "https://rickandmortyapi.com/api/character/97",
               "https://rickandmortyapi.com/api/character/98",
               "https://rickandmortyapi.com/api/character/99",
               "https://rickandmortyapi.com/api/character/100",
               "https://rickandmortyapi.com/api/character/101",
               "https://rickandmortyapi.com/api/character/108",
               "https://rickandmortyapi.com/api/character/268",
               "https://rickandmortyapi.com/api/character/300"
            ],
            "url": "https://rickandmortyapi.com/api/location/5",
            "created": "2017-11-10T13:08:46.060Z"
         },
         {
            "id": 6,
            "name": "Interdimensional Cable",
            "type": "TV",
            "dimension": "unknown",
            "residents": [
               "https://rickandmortyapi.com/api/character/20",
               "https://rickandmortyapi.com/api/character/28",
               "https://rickandmortyapi.com/api/character/29",
               "https://rickandmortyapi.com/api/character/34",
               "https://rickandmortyapi.com/api/character/49",
               "https://rickandmortyapi.com/api/character/51",
               "https://rickandmortyapi.com/api/character/54",
               "https://rickandmortyapi.com/api/character/121",
               "https://rickandmortyapi.com/api/character/126",
               "https://rickandmortyapi.com/api/character/129",
               "https://rickandmortyapi.com/api/character/134",
               "https://rickandmortyapi.com/api/character/136",
               "https://rickandmortyapi.com/api/character/145",
               "https://rickandmortyapi.com/api/character/157",
               "https://rickandmortyapi.com/api/character/173",
               "https://rickandmortyapi.com/api/character/184",
               "https://rickandmortyapi.com/api/character/205",
               "https://rickandmortyapi.com/api/character/207",
               "https://rickandmortyapi.com/api/character/214",
               "https://rickandmortyapi.com/api/character/222",
               "https://rickandmortyapi.com/api/character/223",
               "https://rickandmortyapi.com/api/character/224",
               "https://rickandmortyapi.com/api/character/225",
               "https://rickandmortyapi.com/api/character/250",
               "https://rickandmortyapi.com/api/character/254",
               "https://rickandmortyapi.com/api/character/260",
               "https://rickandmortyapi.com/api/character/264",
               "https://rickandmortyapi.com/api/character/266",
               "https://rickandmortyapi.com/api/character/275",
               "https://rickandmortyapi.com/api/character/277",
               "https://rickandmortyapi.com/api/character/279",
               "https://rickandmortyapi.com/api/character/312",
               "https://rickandmortyapi.com/api/character/314",
               "https://rickandmortyapi.com/api/character/315",
               "https://rickandmortyapi.com/api/character/316",
               "https://rickandmortyapi.com/api/character/317",
               "https://rickandmortyapi.com/api/character/318",
               "https://rickandmortyapi.com/api/character/334",
               "https://rickandmortyapi.com/api/character/351",
               "https://rickandmortyapi.com/api/character/358",
               "https://rickandmortyapi.com/api/character/367",
               "https://rickandmortyapi.com/api/character/370",
               "https://rickandmortyapi.com/api/character/373",
               "https://rickandmortyapi.com/api/character/403",
               "https://rickandmortyapi.com/api/character/406",
               "https://rickandmortyapi.com/api/character/407",
               "https://rickandmortyapi.com/api/character/408",
               "https://rickandmortyapi.com/api/character/409",
               "https://rickandmortyapi.com/api/character/410",
               "https://rickandmortyapi.com/api/character/411",
               "https://rickandmortyapi.com/api/character/412",
               "https://rickandmortyapi.com/api/character/413",
               "https://rickandmortyapi.com/api/character/414",
               "https://rickandmortyapi.com/api/character/415",
               "https://rickandmortyapi.com/api/character/416",
               "https://rickandmortyapi.com/api/character/417",
               "https://rickandmortyapi.com/api/character/418",
               "https://rickandmortyapi.com/api/character/457",
               "https://rickandmortyapi.com/api/character/458",
               "https://rickandmortyapi.com/api/character/459"
            ],
            "url": "https://rickandmortyapi.com/api/location/6",
            "created": "2017-11-10T13:09:09.102Z"
         },
         {
            "id": 7,
            "name": "Immortality Field Resort",
            "type": "Resort",
            "dimension": "unknown",
            "residents": [
               "https://rickandmortyapi.com/api/character/23",
               "https://rickandmortyapi.com/api/character/204",
               "https://rickandmortyapi.com/api/character/320"
            ],
            "url": "https://rickandmortyapi.com/api/location/7",
            "created": "2017-11-10T13:09:17.136Z"
         }
      ]);
   });

   return (
      <section className="character-list grid-view">
         {
            (locList && locList.length > 0)
            ? locList.map(location => <LocationCard key={location.id} {...location} />)
            : <span>Loading...</span>
         }
      </section>
   );
}
