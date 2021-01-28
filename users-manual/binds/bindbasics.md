---
sidebarDepth: 2
posted: 2020-07-30
---
# [bind](/glossary/#glossary_bind)
The Bind is the unit of control for the application, which consist for the informations about binding your application with the execution conditions of it through the <a href="/glossary#glossary_sansi">Sansi</a>.
<!-- bind はアプリケーションの制御単位。これは、Sansiを介したアプリケーションの実行条件とのバインドに関する情報で構成されます。 -->   

## Type
There are the following types of bind:<!-- bind には以下のタイプがあります -->

<dl>
  <dt>Expiration Free</dt>
  <dd>It's a bind with no expiration date. This type of bind is intended to use to denying unauthorized using when lending the application you developed to a specific party for evaluation. The newly created account has one of this type of bond from the beginning as free. This type of bind basically doesn't expire, can be used as free forever, apart from the invalidated if the tampering is suspected.</dd>
  <!-- 有効期限のない bind です。このタイプのバインドは、開発したアプリケーションを評価のために特定の関係者に貸与するときに、不正使用を拒否するために使用することを目的としています。新しく作成されたアカウントには、最初からこのタイプの結合の1つが無料としてあります。このタイプのバインドは基本的に有効期限がなく、改ざんが疑われる場合に無効化されることを除いて、永久に無料で使用できます。-->

  <dt>With Expiration</dt>
  <dd>It is a bind with an expiration date. This type of bind is intended to be purchased and used if you want to allow multiple copies of your application to different execution environments. The expiration date starts counting from the time bind is activated. Once activated, the counting of expiration date will not stop even if you return to the Not active state. instead, you can also purchase an extension of that expiration date. </dd>
  <!-- 有効期限のない bind です。このタイプのバインドは、アプリケーションの複数のコピーを異なる実行環境に許可する場合に購入して使用することを目的としています。有効期限は、バインドがアクティブ化された時点からカウントを開始します。有効化すると、非アクティブ状態に戻っても有効期限のカウントは停止しません。代わりに、その有効期限の延長を購入することもできます。 -->
</dl>


## Status
<mermaid/>
<div class="mermaid">
graph LR
    A[Not active]
    A-->|Change Status|B[Bind Waiting]
    A-->|Change Status|C[Auto Bind Waiting]
    A-->E[Binding]
    B-->|confirm|D[Bind Requesting]
    C-->|confirm|E
    D-->|Change Status|E
    F[Expired]
    G[Invalidated]
</div>

The initial state is "Not active".
<!-- 初期状態は "Not active" です。-->
