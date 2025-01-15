import { HStack, Image } from "@chakra-ui/react";
import useCompanies from "../hooks/useCompanies";
import setImageUrl from "../services/image-url";

interface Props {
  id: number;
  numOfCompanies: number;
}

const CompanyLogos = ({ id, numOfCompanies }: Props) => {
  const { data: companies } = useCompanies(id);
  return (
    <HStack>
      {companies
        .slice(0, numOfCompanies)
        .map((company) =>
          company.logo_path ? (
            <Image
              boxSize={6}
              objectFit="contain"
              key={company.id}
              src={setImageUrl("w45", company.logo_path)}
            />
          ) : (
            company.name
          )
        )}
    </HStack>
  );
};

export default CompanyLogos;
