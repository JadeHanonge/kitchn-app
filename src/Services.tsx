import kitchn, {
    Container,
    convertRGBToRGBA,
    Image,
    Text,
    Link,
    useBreakpoint,
} from "kitchn";

export default function Services(){
    return (
        <Container
            justify={"center"}
            align={"center"}
            gap={"medium"}
        >
            <Text>{"Web Design"}</Text>
            <Text>{"& Framer"}</Text>
            <Text>{"Premium Web Design, Development, and SEO services to help your business stand out."}</Text>
            <Link>
                <Text>{"MY SERVICES"}</Text>
            </Link>
            <Image src={"https://framerusercontent.com/images/FZwDXEWoUflJOZC3kxgyKvwJw.png?scale-down-to=1024"} alt={"Laptop image"} h={"423px"} w={"700px"}/>
            <Container>
                <Text>{"Clients"}</Text>
                <Text>{"150 +"}</Text>
                <Text>{"Projects"}</Text>
                <Text>{"300 +"}</Text>
                <Text>{"Happy Clients"}</Text>
                <Text>{"100%"}</Text>
                <Text>{"Followers"}</Text>
                <Text>{"100k"}</Text>
            </Container>
        </Container> 
    )
    
}

