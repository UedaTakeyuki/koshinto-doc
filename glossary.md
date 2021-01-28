---
sidebarDepth: 2
posted: 2020-10-27
---
# glossary

<dl>
  <dt id="glossary_bind">bind</dt>
  <dd>The unit of control for the application, which consist for the informations about binding your application with the execution conditions of it through the <a href="#glossary_sansi">Sansi</a>. Every bind is uniquely identified by the <a href="#glossary_bind_id">bind ID</a> and associated with sansi throug their built-in bind ID.</dd>
  <!-- アプリケーションの制御単位。これは、Sansiを介したアプリケーションの実行条件とのバインドに関する情報で構成されます。すべてのバインドは、バインドIDによって一意に識別され、組み込みのバインドIDを介してsansiに関連付けられます。 -->

  <dt id="glossary_bind_id">bind ID</dt>
  <dd>Unique ID of bind. </dd>

  <dt id="glossary_koshinto">koshinto<dt>
  <dd>A service which provides you with a Web UI for downloading <a href="#glossary_sansi">sansi</a> or editing <a href="#glossary_bind">bind</a>, responding to inquiries from the sansi about whether or not to execute your application according as the bind stored in it.</dd>
  <!-- sansi」をダウンロードしたり「bind」を編集したりするためのWebUIを提供し、格納されているバインドに従ってアプリケーションを実行するかどうかに関するsansiからの問い合わせに応答するサービス。 -->

  <dt id="glossary_sansi">sansi</dt>
  <dd>A license manager library which is included as a part of your application, and checks whether the application can be executed by collating various keys of the current execution environment with the <a href="#glossary_bind">bind</a> registered in the <a href="#glossary_koshinto">koshinto</a> service.</dd>
  <!-- アプリケーションの一部として含まれているライセンスマネージャーライブラリであり、現在の実行環境のさまざまなキーを庚申塔サービスに登録されている「バインド」と照合して、アプリケーションを実行できるかどうかを確認します。 -->

</dl>