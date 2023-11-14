import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import bg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";
import GridContainer from "../../components/GridContainer";
import MenuCard from "../shared/MenuCard";
import Button from "../../components/Button";

const AllMenu = () => {
  const { data, loader, filterData } = useFetch(`/menu.json`, "offered");

  if (loader) {
    return (
      <p className="h-screen flex items-center justify-center">
        <span>Loading...</span>
      </p>
    );
  }

  //   const offeredMenu = data?.filter((menu) => menu.category === "offered") || [];
  const dessertMenu = data?.filter((menu) => menu.category === "dessert") || [];
  const pizzaMenu = data?.filter((menu) => menu.category === "pizza") || [];
  const saladMenu = data?.filter((menu) => menu.category === "salad") || [];
  const soupMenu = data?.filter((menu) => menu.category === "soup") || [];
  const drinksMenu = data?.filter((menu) => menu.category === "drinks") || [];
  return (
    <Container className={"mt-0"}>
      <Helmet>
        <title>All Menu - Bistro Boss Restaurant</title>
      </Helmet>
      <Container className={"mt-0"}>
        <Cover
          bg={bg}
          title={"OUR MENU"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="my-20">
          <SectionTitle
            subHeading="---Don't miss---"
            heading="TODAY'S OFFER"
          ></SectionTitle>
          <GridContainer>
            {filterData?.map((menu) => (
              <MenuCard key={menu.id} menu={menu}></MenuCard>
            ))}
          </GridContainer>
          <div className="flex items-center justify-center">
            <Button title={"ORDER YOUR FAVORITE FOOD"}></Button>
          </div>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {dessertMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <div className="flex items-center justify-center">
          <Button title={"ORDER YOUR FAVORITE DESSERT"}></Button>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"PIZZA"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {pizzaMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <div className="flex items-center justify-center">
          <Button title={"ORDER YOUR FAVORITE PIZZA"}></Button>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"SALADS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {saladMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <div className="flex items-center justify-center">
          <Button title={"ORDER YOUR FAVORITE SALAD"}></Button>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"SOUPS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {soupMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <div className="flex items-center justify-center">
          <Button title={"ORDER YOUR FAVORITE SOUP"}></Button>
        </div>
      </Container>

      <hr />

      <Container>
        <Cover
          bg={bg}
          title={"DRINKS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <GridContainer className="my-20">
          {drinksMenu?.map((menu) => (
            <MenuCard key={menu.id} menu={menu}></MenuCard>
          ))}
        </GridContainer>
        <div className="flex items-center justify-center">
          <Button title={"ORDER YOUR FAVORITE DRINK"}></Button>
        </div>
      </Container>
    </Container>
  );
};

export default AllMenu;
