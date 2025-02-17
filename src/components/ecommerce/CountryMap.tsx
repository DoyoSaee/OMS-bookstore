import React from "react";
// import { VectorMap } from "@react-jvectormap/core";
import { krMill } from "@react-jvectormap/southkorea";
import dynamic from "next/dynamic";

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
  { ssr: false }
);
interface KoreaMapProps {
  mapColor?: string;
}

type Marker = {
  latLng: [number, number];
  name: string;
  style?: {
    fill: string;
    borderWidth: number;
    borderColor: string;
  };
};

const KoreaMap: React.FC<KoreaMapProps> = ({ mapColor }) => {
  return (
    <VectorMap
      map={krMill}
      backgroundColor="transparent"
      markerStyle={{
        initial: {
          fill: "#465FFF",
        },
      }}
      markers={[
        { latLng: [37.5665, 126.978], name: "Seoul", style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" } },
        { latLng: [35.1796, 129.0756], name: "Busan", style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" } },
        { latLng: [35.8714, 128.6014], name: "Daegu", style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" } },
        { latLng: [37.4563, 126.7052], name: "Incheon", style: { fill: "#465FFF", borderWidth: 1, borderColor: "white" } },
      ] as Marker[]}
      zoomOnScroll={false}
      regionStyle={{
        initial: {
          fill: mapColor || "#D0D5DD",
          stroke: "none",
        },
        hover: {
          fillOpacity: 0.7,
          cursor: "pointer",
          fill: "#465FFF",
        },
        selected: {
          fill: "#465FFF",
        },
      }}
    />
  );
};

export default KoreaMap;

