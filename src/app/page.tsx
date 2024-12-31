
import SearchInputComponent from '../../components/SearchInput';
import ButtonComponent from '../../components/Button';
import { filterData } from '../../services/FilterData';



export default async function Home() {

 
  const result= await filterData();


  return (
    <>
    <SearchInputComponent></SearchInputComponent>
    <ButtonComponent></ButtonComponent>
    <p>{result.name}</p>
    <p>{result.date}</p>
    <p>{result.description}</p>
     
    </>
  );
}

