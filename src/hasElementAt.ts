export const hasElementAt =
  <
    Pos extends number,
    T extends { [K in Pos]: unknown } = { [K in Pos]: unknown }
  >(
    at: Pos
  ) =>
  (target: unknown): target is T =>
    target instanceof Array && at in target;
