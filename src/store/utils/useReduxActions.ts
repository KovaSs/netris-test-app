/* eslint-disable */
import { useMemo, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

interface ActionsInObject {
  <T, U>(data: U): T;
}

/**
 * Функционал создания мемоизированных redux ActionCreators
 * @param {Array, Object, Function} actions - функция принимает AC в объекте, массиве или одиночном формате
 * @param {Array} deps - массив с зависимостями для обновления мемоизации
 * @returns {Array, Object, Function} возращает переданные AC обернутыми в dispatch
 */
export function useReduxActions<T, U>(actions: T, deps?: U[]): T;
export function useReduxActions<T, U>(actions: T[], deps?: U[]): T[];
export function useReduxActions<T extends ActionsInObject, U>(actions: T, deps?: U[]): T;
export function useReduxActions(actions: any, deps?: any[]): any {
  if (!actions) return;
  const dispatch = useDispatch<Dispatch>();

  /** Если передается только один AC */
  if (typeof actions === 'function') {
    return useCallback(
      <T>(data: T) => dispatch(actions(data)),
      deps ? [dispatch, ...deps] : [dispatch],
    );
  }

  return useMemo(
    () => {
      /** Если передается массив AC */
      if (Array.isArray(actions)) {
        return actions.map((action) => bindActionCreators(action, dispatch));
      }
      /** Если передается объект AC */
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
}
