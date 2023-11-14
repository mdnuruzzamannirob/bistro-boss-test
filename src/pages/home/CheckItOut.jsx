import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import MenuCard from "../shared/MenuCard";
import Button from "../../components/Button";
import GridContainer from "../../components/GridContainer";
import useFetch from "../../hooks/useFetch";

const CheckItOut = () => {
  const { data, loader } = useFetch(`/menu.json`);

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <span>Loading...</span>
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
