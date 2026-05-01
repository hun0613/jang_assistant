-- ========================================
-- 장비서 (Jang-Assistant) DB Schema
-- 최초 작성: #34 (2026-03-25)
-- 리전 이전 시 재사용: #50
-- ========================================

-- 1. sessions (익명 세션 관리)
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 2. carts (장바구니)
CREATE TABLE IF NOT EXISTS carts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  session_id uuid NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  title text NOT NULL,
  memo text,
  status text NOT NULL DEFAULT 'CREATED',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 3. cart_items (품목)
CREATE TABLE IF NOT EXISTS cart_items (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cart_id bigint NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  name text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  price integer,
  status text NOT NULL DEFAULT 'IN_LIST',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_carts_session_id ON carts(session_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_cart_id ON cart_items(cart_id);

-- RLS (Row Level Security)
-- 현재: anon 전체 허용 (로그인 미구현)
-- TODO: 로그인 구현 시 세션/유저 기반 정책으로 교체
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_sessions" ON sessions FOR ALL TO anon USING (true) WITH CHECK (true);

ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_carts" ON carts FOR ALL TO anon USING (true) WITH CHECK (true);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_cart_items" ON cart_items FOR ALL TO anon USING (true) WITH CHECK (true);
