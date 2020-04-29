import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { GoLocation } from 'react-icons/go';
import { MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import SelectInput from '~/components/SelectInput';
import VehicleCard from '~/components/VehicleCard';
import DefaultLayout from '~/pages/_layout/default';

import {
  Container,
  Content,
  Section,
  Group,
  InnerGroup,
  AdvancedSearch,
  ActionsContainer,
  CleanButton,
  SubmitButton,
  List,
  CheckboxContainer,
  Checkbox,
} from './styles';

// const years

export default function SearchCar() {
  const todosObj = useMemo(() => ({ value: -1, label: 'TODOS' }), []);

  const radiusList = useMemo(
    () => [
      { value: 100, label: '100km' },
      { value: 200, label: '200km' },
      { value: 300, label: '300km' },
      { value: 400, label: '400km' },
    ],
    []
  );

  const yearsList = useMemo(
    () => [
      { value: 2000, label: '2000' },
      { value: 2001, label: '2001' },
      { value: 2005, label: '2005' },
      { value: 2007, label: '2007' },
      { value: 2010, label: '2010' },
      { value: 2015, label: '2015' },
      { value: 2018, label: '2018' },
      { value: 2019, label: '2019' },
      { value: 2020, label: '2020' },
    ],
    []
  );

  const pricesList = useMemo(
    () => [
      { value: 20000, label: 'R$ 20.000,00' },
      { value: 40000, label: 'R$ 40.000,00' },
      { value: 60000, label: 'R$ 60.000,00' },
      { value: 70000, label: 'R$ 70.000,00' },
      { value: 90000, label: 'R$ 90.000,00' },
      { value: 110000, label: 'R$ 110.000,00' },
      { value: 150000, label: 'R$ 150.000,00' },
    ],
    []
  );

  const [radius, setRadius] = useState(radiusList[0]);

  const [state, setState] = useState({ value: 1, label: 'São Paulo - SP' });

  const [make, setMake] = useState(todosObj);
  const [makes, setMakes] = useState([todosObj]);

  const [model, setModel] = useState(todosObj);
  const [models, setModels] = useState([todosObj]);

  const [version, setVersion] = useState(todosObj);
  const [versions, setVersions] = useState([todosObj]);

  const [vehicles, setVehicles] = useState([]);

  const [isNews, setIsNews] = useState(true);
  const [isUsed, setIsUsed] = useState(false);

  /**
   * Load makes
   */
  useEffect(() => {
    async function loadMakes() {
      const response = await api.get('/OnlineChallenge/Make');

      const mMakes = await response.data.map((mMake) => ({
        label: mMake.Name,
        value: mMake.ID,
      }));

      setMakes([todosObj, ...mMakes]);
    }
    loadMakes();
  }, [todosObj]);

  /**
   * Load models
   */
  useEffect(() => {
    async function loadModels() {
      const response = await api.get('/OnlineChallenge/Model', {
        params: {
          MakeID: make.value,
        },
      });

      const mModels = response.data.map((mModel) => ({
        value: mModel.ID,
        label: mModel.Name,
        data: mModel,
      }));

      setModels([todosObj, ...mModels]);
    }

    loadModels();
  }, [make, todosObj]);

  /**
   * Load versions
   */
  useEffect(() => {
    async function loadVersions() {
      const response = await api.get('/OnlineChallenge/Version', {
        params: {
          ModelID: model.value,
        },
      });

      const mVersions = response.data.map((mVersion) => ({
        value: mVersion.ID,
        label: mVersion.Name,
        data: mVersion,
      }));

      setVersions([todosObj, ...mVersions]);
    }
    loadVersions();
  }, [model, todosObj]);

  const loadVehicles = useCallback(
    async (page = 1) => {
      const response = await api.get('/OnlineChallenge/Vehicles', {
        params: {
          Page: page,
        },
      });

      if (page === 1) {
        setVehicles(response.data);
      } else {
        setVehicles([...vehicles, response.data]);
      }
    },
    [vehicles]
  );

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  function onMakeChange(value) {
    setMake(value);
    setModel(models[0]);
    setVersion(versions[0]);
  }

  function onModelChange(value) {
    setModel(value);
    setVersion(versions[0]);
  }

  return (
    <DefaultLayout>
      <Content>
        <Container>
          <CheckboxContainer>
            <Checkbox>
              <input
                type="checkbox"
                id="isNews"
                checked={isNews}
                onChange={() => setIsNews(!isNews)}
              />
              <label htmlFor="isNews">Novos</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                id="isUsed"
                checked={isUsed}
                onChange={() => setIsUsed(!isUsed)}
              />
              <label htmlFor="isUsed">Usados</label>
            </Checkbox>
          </CheckboxContainer>

          <Section>
            <Group>
              <InnerGroup>
                <SelectInput
                  icon={<GoLocation />}
                  label="Onde"
                  placeholder="Cidade / Estado"
                  style={{ flex: 2.5 }}
                  options={[]}
                  value={state}
                  onChange={setState}
                />
                <SelectInput
                  label="Raio"
                  placeholder=""
                  options={radiusList}
                  value={radius}
                  onChange={setRadius}
                />
              </InnerGroup>

              <InnerGroup>
                <SelectInput
                  className="margin-right"
                  placeholder="Ano Desejado"
                  options={yearsList}
                />
                <SelectInput
                  placeholder="faixa de Preço"
                  options={pricesList}
                />
              </InnerGroup>
            </Group>

            <Group>
              <InnerGroup>
                <SelectInput
                  className="margin-right"
                  isClearable={false}
                  label="Marca"
                  placeholder=""
                  value={make}
                  onChange={onMakeChange}
                  options={makes}
                />

                <SelectInput
                  label="Modelo"
                  isClearable={false}
                  value={model}
                  placeholder=""
                  options={models}
                  onChange={onModelChange}
                />
              </InnerGroup>

              <SelectInput
                label="Versão"
                placeholder=""
                isClearable={false}
                value={version}
                onChange={setVersion}
                options={versions}
              />
            </Group>
          </Section>
          <Section>
            <AdvancedSearch>
              <MdChevronRight />
              Busca Avançada
            </AdvancedSearch>

            <ActionsContainer>
              <CleanButton>Limpar filtros</CleanButton>
              <SubmitButton onClick={() => loadVehicles(1)}>
                VER OFERTAS
              </SubmitButton>
            </ActionsContainer>
          </Section>
        </Container>
      </Content>

      <List>
        {vehicles.map((vehicle) => (
          <VehicleCard key={String(vehicle.ID)} vehicle={vehicle} />
        ))}
      </List>
    </DefaultLayout>
  );
}
