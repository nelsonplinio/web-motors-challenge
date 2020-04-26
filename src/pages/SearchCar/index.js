import React, { useCallback, useState } from 'react';

import { GoLocation } from 'react-icons/go';
import { MdChevronRight } from 'react-icons/md';
import DefaultLayout from '~/pages/_layout/default';

import SelectInput from '~/components/SelectInput';

import {
  Container,
  Section,
  Group,
  AdvancedSearch,
  ActionsContainer,
  CleanButton,
  SubmitButton,
} from './styles';

export default function SearchCar() {
  const [radius] = useState([
    { value: 100, label: '100km' },
    { value: 200, label: '200km' },
  ]);
  const loadCity = useCallback((inputText, callback) => {
    setTimeout(() => {
      callback([
        {
          value: 1,
          label: 'São Paulo - SP',
        },
        {
          value: 2,
          label: 'Goiânia - GO',
        },
      ]);
    });
  }, []);
  return (
    <DefaultLayout>
      <Container>
        <Section>
          <Group>
            <div>
              <SelectInput
                icon={<GoLocation />}
                async
                isClearable
                label="Onde"
                style={{ flex: 3 }}
                loadOptions={loadCity}
              />
              <SelectInput label="Raio" options={radius} />
            </div>

            <div>
              <SelectInput
                placeholder="Ano Desejado"
                options={radius}
                style={{ marginRight: 8 }}
              />
              <SelectInput placeholder="faixa de Preço" options={radius} />
            </div>
          </Group>

          <Group>
            <div>
              <SelectInput
                async
                isClearable
                label="Marca"
                loadOptions={loadCity}
                style={{ marginRight: 8 }}
              />

              <SelectInput label="Modelo" options={radius} />
            </div>

            <SelectInput label="Versão" isClearable options={radius} />
          </Group>
        </Section>
        <Section>
          <AdvancedSearch>
            <MdChevronRight />
            Busca Avançada
          </AdvancedSearch>

          <ActionsContainer>
            <CleanButton>Limpar filtros</CleanButton>
            <SubmitButton>VER OFERTAS</SubmitButton>
          </ActionsContainer>
        </Section>
      </Container>
    </DefaultLayout>
  );
}
