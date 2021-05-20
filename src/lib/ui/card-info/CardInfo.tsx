import React from 'react';
import { Container } from '../../components/container';
import { Grid } from '../../components/grid';
import { Heading } from '../../components/heading';
import { Section } from '../../components/section';
import { Text } from '../../components/text';
import { ManaSymbol } from '../mana-symbol';
import { S } from './style';

const CardInfo = () => {
  return (
    <Section>
      <Container>
        <Grid container as={S.CardInfoContainer}>
          <Grid item>
            <S.CardContainer>
              <img src="/assets/images/card.png" alt="" />
            </S.CardContainer>
          </Grid>

          <Grid item container>
            <Grid item as={S.TopInfo}>
              <div>
                <Text subTitle>Card Name</Text>
                <Heading>Dusk Imp</Heading>
              </div>

              <div>
                <Text subTitle>Mana Cost</Text>
                <S.ManaCost>
                  <Text as={S.ManaCostNumber} weight="600">
                    2
                  </Text>
                  <ManaSymbol />
                </S.ManaCost>
              </div>
            </Grid>

            <Grid item>
              <Text subTitle>Type</Text>
            </Grid>

            <Grid item>
              <Text subTitle>Description</Text>
            </Grid>

            <Grid item>
              <Text subTitle>Illustrated by</Text>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default CardInfo;
