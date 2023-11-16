import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import GridContainer from "../../components/GridContainer";
import useFetch from "../../hooks/useFetch";
import MenuCard from "../../components/shared/MenuCard";
import { PropagateLoader } from "react-spinners";

const CheckItOut = () => {
  const { data, loader } = useFetch(`http://localhost:5001/api/v1/menu`);

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <PropagateLoader color="#BB8506" />
      </p>
    );
  }

  const filterMenu = data?.filter((menu) => menu.category === "popular") || [];
  return (
    <Container>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <GridContainer>
        {filterMenu?.map((menu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </GridContainer>
      <div className="flex items-center justify-center">
        <Button title={"View Full Menu"}></Button>
      </div>
    </Container>
  );
};

export default CheckItOut;
