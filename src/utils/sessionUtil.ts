'use client';

import { createSession, getSession } from '@/actions/sessions/sessionActions';
import { localStorageUtil } from './storageUtil';

const SESSION_ID_KEY = 'sessionId';

/**
 * 익명 세션 ID를 가져오거나 새로 생성한다.
 * - localStorage에 sessionId가 있으면 DB에서 검증 후 반환
 * - 없거나 DB에 존재하지 않으면 새로 생성
 */
export const getOrCreateSessionId = async (): Promise<string> => {
  const storedId = localStorageUtil.get(SESSION_ID_KEY);

  if (storedId) {
    try {
      const session = await getSession(storedId);
      if (session) return session.id;
    } catch {
      // 저장된 세션이 DB에 없으면 새로 생성
    }
  }

  const newSession = await createSession();
  localStorageUtil.set(SESSION_ID_KEY, newSession.id);
  return newSession.id;
};
