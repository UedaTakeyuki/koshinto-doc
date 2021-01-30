# Interface of Sansi

```c:
/**
* Header file for sansi
* 
* @file sansi.h
* @brief Header file for sansi
* @author Dr. Takeyuki UEDA
* @copyright Copyright© Atelier UEDA 2020 - All rights reserved.
*/
#ifndef _SANSI_H_
#define _SANSI_H_

/**
 * @fn
 * Print version.
 * @brief print version of sansi for debug information.
 */
void version();

/**
 * @fn
 * Confirmation of execution authority.
 * @brief 要約説明
 * @param (引数名) 引数の説明
 * @param (引数名) 引数の説明
 * @return 戻り値の説明
 * @sa 参照すべき関数を書けばリンクが貼れる
 * @detail 詳細な説明
 */
int confirm(char *substitutebid, char *secretstring, char *safekeepedkey);

typedef enum {
  ng_comfirmed   = 0,
  ok_confirmed   = 1,
  error_network  = -1,
  error_internal = -2,

} error_cause;

#endif
```