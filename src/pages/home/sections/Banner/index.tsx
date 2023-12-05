import { CircularProgress, Grid } from '@material-ui/core';
import { Button } from 'src/components/Button';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import axios from 'src/services/axios';
import CarouselImages from 'src/components/CarouseImages';
import useStyles from './style';
import thumnailStatic from 'src/assets/icons/landing/static-banner.png';

import iconMuted from 'src/assets/icons/landing/muted.svg';
import iconUnMuted from 'src/assets/icons/landing/loudspeaker.svg';
import iconTrailer from 'src/assets/icons/landing/game.svg';
import Slider from '../Slider';
import '../Slider/styles.scss';
import LaunchBtnComponent from '../Slider/components/LaunchBtnComponent';
import { TwitterIconLanding } from 'src/assets/icons';

interface BannerMediaProps {
  currentBanner?: {
    type: string;
    url: string;
    id: string;
  };
  muted: boolean;
}

function BannerMedia({ currentBanner, muted }: BannerMediaProps) {
  if (currentBanner?.id === 'STATIC') return null;

  if (currentBanner?.type === 'video') {
    return (
      <ReactPlayer
        url={currentBanner?.url}
        muted={muted}
        loop={true}
        playing={true}
        volume={1}
        width="100%"
        height="100%"
      />
    );
  }

  if (currentBanner?.type === 'image') {
    return (
      <div>
        <img src={currentBanner?.url} alt="" />
      </div>
    );
  }

  return (
    <Grid
      style={{
        height: 700,
      }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={45} />
    </Grid>
  );
}

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState<any>();
  const [muted, setMuted] = useState<boolean>(true);
  const [staticItem, setStaticItem] = useState({
    id: 'STATIC',
    thumbnail_url: thumnailStatic,
    url: '',
    type: 'image',
  });

  const isStaticPage = currentBanner?.id === 'STATIC';

  const sidebarCollapsed = isStaticPage ? false : true;
  const [mediaList, setMediaList] = useState<any>([]);

  const mediaListConvert = (mediaList: any) => {
    return mediaList.map((media: any, index: number) => {
      return [
        { ...media, id: index * 2, url: media.slide1_url, type: media.slide1_type },
        { ...media, id: index * 2 + 1, url: media.slide2_url, type: media.slide2_type },
      ];
    });
  };

  useEffect(() => {
    const getMediaList2 = async () => {
      try {
        const resp = (await axios.get('/media-list')) as any;
        const data = _.get(resp, 'data.data', []);
        const mediaConverted: any = _.flattenDeep(mediaListConvert(data));
        setMediaList(mediaConverted);
      } catch (err: any) {
        console.error(err);
      }
    };
    getMediaList2();
  }, []);

  useEffect(() => {
    const getMediaList = async () => {
      try {
        const resp = (await axios.get('/vispx-slider-list')) as any;
        const data = _.get(resp, 'data.data.data', []) as any[];
        if (data.length > 0) {
          const item = data[0];
          const result = {
            ...item,
            id: 'STATIC',
          };
          setStaticItem(result);
        }
      } catch (err: any) {
        console.error(err);
      }
    };
    getMediaList();
  }, []);

  const styles = useStyles({
    url: currentBanner?.url || '',
    muted,
    type: currentBanner?.type,
    collapsed: sidebarCollapsed,
  });
  const onClickImage = (data: any) => {
    setCurrentBanner(data);
  };

  const mainClass = styles.sidebar;

  const toggleVolume = () => {
    setMuted(!muted);
  };

  const onClickYoutubeLink = (banner: any) => {
    if (banner.trailer) {
      window.open(banner.trailer);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.container}>
        <LaunchBtnComponent isStatic={true} />
        <div className={styles.videoBannerParent}>
          <div id="videoBanner" className={styles.banner}>
            <BannerMedia currentBanner={currentBanner} muted={muted} />
            {isStaticPage && <Slider staticItem={staticItem} />}
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.overlay}>
            {isStaticPage ? (
              <div className={mainClass} />
            ) : (
              <div className={mainClass}>
                <span className={`${mainClass}__status`}>
                  {currentBanner?.project_type || 'Private'}
                </span>
                <div className={`${mainClass}__title`}>{currentBanner?.project_name}</div>
                <div className={`${mainClass}__network`}>
                  <span className={`${mainClass}__network--name`}>Blockchain:&nbsp;</span>
                  <span
                    className={`${mainClass}__network--value`}
                    style={{
                      textTransform:
                        currentBanner?.project_network === 'tbd' ? 'uppercase' : 'capitalize',
                    }}
                  >
                    {currentBanner?.project_network}
                  </span>
                </div>
                <div className={`${mainClass}__content`}>{currentBanner?.description}</div>
                <div className={`${mainClass}__footer`}>
                  <Button
                    variant="outlined"
                    shape="rounded"
                    style={{ marginRight: 15 }}
                    onClick={() => onClickYoutubeLink(currentBanner)}
                  >
                    <img src={iconTrailer} alt="" /> &nbsp; &nbsp;
                    <span className={`${mainClass}__text`}>Play trailer</span>
                  </Button>
                  <Button
                    variant="outlined"
                    shape="rounded"
                    style={{ marginRight: 15 }}
                    onClick={() =>
                      currentBanner?.whitepaper ? window.open(currentBanner?.whitepaper) : ''
                    }
                  >
                    <img src={'images/landing/download.svg'} alt="" /> &nbsp;&nbsp;
                    <span className={`${mainClass}__text`}>White paper</span>
                  </Button>
                  <Button
                    variant="outlined"
                    shape="rounded"
                    style={{ marginRight: 15 }}
                    onClick={() =>
                      currentBanner?.website ? window.open(currentBanner?.website) : ''
                    }
                  >
                    <img src={'images/landing/official.svg'} alt="" /> &nbsp;&nbsp;
                    <span className={`${mainClass}__text`}>Official website</span>
                  </Button>

                  {currentBanner?.type === 'video' && (
                    <img
                      key={String(currentBanner?.id)}
                      className={`${mainClass}__muted`}
                      onClick={toggleVolume}
                      src={muted ? iconMuted : iconUnMuted}
                      alt="speakerLoud"
                      width={42}
                      height={42}
                    />
                  )}
                </div>
              </div>
            )}
            <div className={styles.carousels}>
              {mediaList?.length > 1 && (
                <CarouselImages
                  onClickImage={onClickImage}
                  mediaList={mediaList}
                  staticItem={staticItem}
                />
              )}
            </div>
          </div>
        </div>
        {!isStaticPage && (
          <div className={styles.socials}>
            <div className={`${styles.socials}__container`}>
              <a
                className={`${styles.socials}__container--item`}
                href={currentBanner?.twitter}
                key={1}
                target="_blank"
                rel="noreferrer"
              >
                <img src={TwitterIconLanding} alt="" />
              </a>
              <a
                className={`${styles.socials}__container--item`}
                href={currentBanner?.discord}
                key={2}
                target="_blank"
                rel="noreferrer"
              >
                <img src={'images/landing/discord.svg'} alt="" />
              </a>

              <a
                className={`${styles.socials}__container--item`}
                href={currentBanner?.telegram}
                key={3}
                target="_blank"
                rel="noreferrer"
              >
                <img src={'images/landing/telegram.svg'} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
