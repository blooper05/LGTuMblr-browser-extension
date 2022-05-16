import { Container, SimpleGrid } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from '../components/Image';
import Loader from '../components/Loader';
import Error from '../components/Error';
import useFetchImages from '../hooks/useRequest';

export default function Index() {
  const { data, error, size, setSize } = useFetchImages();

  if (error) return <Error />;
  if (!data) return <Loader withLogo={true} />;

  const fetchData = () => setSize(size + 1);
  const fetchedData = [].concat(...data);

  return (
    <Container maxWidth="full" padding={4}>
      <InfiniteScroll
        next={fetchData}
        hasMore={true}
        dataLength={fetchedData.length}
        loader={<Loader />}
      >
        <SimpleGrid columns={4} spacing={8} padding={4}>
          {fetchedData.map((url: string, i: number) => (
            <Image url={url} key={i} />
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Container>
  );
}
