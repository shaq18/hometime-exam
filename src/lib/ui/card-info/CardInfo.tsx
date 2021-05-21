import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container';
import { Grid } from '../../components/grid';
import { Heading } from '../../components/heading';
import { Hide } from '../../components/hide';
import { Section } from '../../components/section';
import { Text } from '../../components/text';
import { Loader } from '../loader';
import { ManaSymbol } from '../mana-symbol';
import { RandomCardButton } from '../random-card-button';
import { S } from './style';

interface CardType {
  artist: string;
  imageUrl: string;
  manaCost: string;
  name: string;
  power: string;
  text: string;
  type: string;
  toughness: string;
}

const CardInfo = () => {
  const [card, setCard] = useState<CardType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomCard = async () => {
    setIsLoading(true);

    try {
      const res = await Axios.get(
        `https://api.magicthegathering.io/v1/cards?random=true&page=1&pageSize=1`
      );
      setCard(res.data.cards[0]);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getRandomCard();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Grid container as={S.CardInfoContainer}>
            {isLoading && <Loader />}

            <Grid item alignSelf="center">
              <Hide hide={isLoading}>
                {card?.imageUrl ? (
                  <S.CardContainer>
                    <img src={card.imageUrl} alt="" />
                  </S.CardContainer>
                ) : (
                  <S.CardImagePlaceholder>
                    <Text align="center">Image not available</Text>
                  </S.CardImagePlaceholder>
                )}
              </Hide>
            </Grid>

            <Hide hide={isLoading}>
              <Grid item container as={S.CardDetails}>
                <Grid item as={S.TopInfo}>
                  <div>
                    <Text subTitle>Card Name</Text>
                    <Heading as={S.CardName}>{card && card.name}</Heading>
                  </div>

                  <div>
                    <Text subTitle align="right">
                      Mana Cost
                    </Text>
                    <S.ManaCost>
                      <ManaSymbol mana={card?.manaCost ? card.manaCost : null} />
                    </S.ManaCost>
                  </div>
                </Grid>

                <Grid item>
                  <Text subTitle>Type</Text>

                  <S.TextFrame>
                    <Text>{card && card.type}</Text>
                  </S.TextFrame>
                </Grid>

                <Grid item container as={S.CardDescription}>
                  <Text subTitle>Description</Text>
                  <S.TextFrame>
                    <Text lineHeight="1.5">{card?.text ? card.text : 'N/A'}</Text>
                  </S.TextFrame>
                </Grid>

                <Grid item as={S.BottomInfo}>
                  <div>
                    <Text subTitle>Illustrated by</Text>
                    <Text as={S.CardArtist}>{card && card.artist}</Text>
                  </div>
                  <div>
                    <S.PowerContainer>
                      <Text size="1.5rem" weight="600">
                        {card?.power && card?.toughness ? (
                          <span>
                            {card.power}/{card.toughness}
                          </span>
                        ) : (
                          <span>N/A</span>
                        )}
                      </Text>
                    </S.PowerContainer>
                  </div>
                </Grid>
              </Grid>
            </Hide>
          </Grid>
          <RandomCardButton onClick={getRandomCard} />
        </Container>
      </Section>
    </>
  );
};

export default CardInfo;
