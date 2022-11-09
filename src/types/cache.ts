export type CacheMapProps = Map<string, CacheProps>;

interface CacheProps {
  expiredTime: Date;
  value: ValueProps;
}

type ValueProps = Array<string>;
