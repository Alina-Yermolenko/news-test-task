import { fetchMorePosts } from "../../store/posts/actions";
import * as React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';

type Props = {
  start: number, 
  limit: number, 
}

export const LoadMoreButton:React.FC<Props> = ({ start, limit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    try {
      await dispatch(fetchMorePosts(start, limit));
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      variant="contained"
      component="label"
      onClick={handleClick} disabled={isLoading}>
      {isLoading ? t(`news.loading`) : t(`news.loadMore`)}
    </Button>
  );
}