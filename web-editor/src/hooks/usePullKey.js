import * as React from "react";

const PULL_KEY_CHARSET = "abcdefghijklmnopqrstuvwxyz0123456789";

export default function usePullKey(initialPullKey) {
  const [pullKey, setPullKey] = React.useState({
    value: initialPullKey,
    valid: validatePullKey(initialPullKey),
  });

  const onPullKeyChange = (pullKey) => {
    setPullKey({ value: pullKey, valid: validatePullKey(pullKey) });
  };

  return [pullKey, onPullKeyChange];
}

function validatePullKey(key) {
  key = key.trim();
  if (key.length !== 16) {
    return false;
  }
  let checksum = 13;
  for (let i = 0; i < 15; i++) {
    const index = PULL_KEY_CHARSET.indexOf(key[i]);
    checksum += index;
  }
  const checksumKey = PULL_KEY_CHARSET.charAt(
    checksum % PULL_KEY_CHARSET.length
  );
  const lastChar = key[key.length - 1];
  return checksumKey === lastChar;
}
