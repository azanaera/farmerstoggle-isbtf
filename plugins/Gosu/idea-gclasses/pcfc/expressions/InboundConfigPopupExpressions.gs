package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InboundConfigPopupExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundConfigPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=InboundConfigPopup) at InboundConfigPopup.pcf: line 8, column 66
    function canEdit_46 () : java.lang.Boolean {
      return perm.System.editinboundfiles
    }
    
    override property get CurrentLocation () : pcf.InboundConfigPopup {
      return super.CurrentLocation as pcf.InboundConfigPopup
    }
    
    function deleteConfigs(configs : InboundFileConfig[]) : void {
          var bundle = gw.transaction.Transaction.newBundle()
          for (conf in configs) {
            conf = bundle.add(conf)
            conf.remove()
          }
          bundle.commit()
        }
        
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InboundConfigScreenExpressionsImpl extends InboundConfigPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=S3ConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function action_3 () : void {
      NewInboundS3ConfigPopup.push()
    }
    
    // 'action' attribute on ToolbarButton (id=S3ConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewInboundS3ConfigPopup.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=S3ConfigsDeleteButton) at InboundConfigPopup.pcf: line 45, column 57
    function allCheckedRowsAction_7 (CheckedValues :  entity.InboundS3FileConfig[], CheckedValuesErrors :  java.util.Map) : void {
      deleteConfigs(CheckedValues)
    }
    
    // 'initialValue' attribute on Variable at InboundConfigPopup.pcf: line 15, column 56
    function initialValue_0 () : List<entity.InboundS3FileConfig> {
      return gw.api.database.Query.make(InboundS3FileConfig).select().toList()
    }
    
    // 'initialValue' attribute on Variable at InboundConfigPopup.pcf: line 20, column 59
    function initialValue_1 () : List<entity.InboundLocalFileConfig> {
      return gw.api.database.Query.make(InboundLocalFileConfig).select().toList()
    }
    
    // EditButtons (id=S3EditButtons) at InboundConfigPopup.pcf: line 38, column 37
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextCell (id=InputS3Prefix_Cell) at InboundConfigPopup.pcf: line 70, column 60
    function sortValue_10 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.InputS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Bucket_Cell) at InboundConfigPopup.pcf: line 74, column 62
    function sortValue_11 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ArchiveS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Prefix_Cell) at InboundConfigPopup.pcf: line 78, column 62
    function sortValue_12 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ArchiveS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 84, column 52
    function sortValue_13 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 90, column 63
    function sortValue_14 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 96, column 52
    function sortValue_15 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.DaysTillPurge
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 62, column 41
    function sortValue_8 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputS3Bucket_Cell) at InboundConfigPopup.pcf: line 66, column 60
    function sortValue_9 (s3InboundConfig :  entity.InboundS3FileConfig) : java.lang.Object {
      return s3InboundConfig.InputS3Bucket
    }
    
    // 'value' attribute on RowIterator (id=S3ConfigsIterator) at InboundConfigPopup.pcf: line 55, column 78
    function value_45 () : java.util.List<entity.InboundS3FileConfig> {
      return s3ConfigsList
    }
    
    // 'visible' attribute on ToolbarButton (id=S3ConfigsNewButton) at InboundConfigPopup.pcf: line 35, column 57
    function visible_2 () : java.lang.Boolean {
      return perm.System.editinboundfiles
    }
    
    property get localConfigsList () : List<entity.InboundLocalFileConfig> {
      return getVariableValue("localConfigsList", 1) as List<entity.InboundLocalFileConfig>
    }
    
    property set localConfigsList ($arg :  List<entity.InboundLocalFileConfig>) {
      setVariableValue("localConfigsList", 1, $arg)
    }
    
    property get s3ConfigsList () : List<entity.InboundS3FileConfig> {
      return getVariableValue("s3ConfigsList", 1) as List<entity.InboundS3FileConfig>
    }
    
    property set s3ConfigsList ($arg :  List<entity.InboundS3FileConfig>) {
      setVariableValue("s3ConfigsList", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/inbound/InboundConfigPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InboundConfigScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 84, column 52
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.ChunkSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 90, column 63
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.FileHandlerClass = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 96, column 52
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      s3InboundConfig.DaysTillPurge = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 90, column 63
    function validationExpression_35 () : java.lang.Object {
      return gw.inboundfile.InboundFileUtils.validateFileHandlerClass(s3InboundConfig.FileHandlerClass)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 62, column 41
    function valueRoot_17 () : java.lang.Object {
      return s3InboundConfig
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at InboundConfigPopup.pcf: line 62, column 41
    function value_16 () : String {
      return s3InboundConfig.Name
    }
    
    // 'value' attribute on TextCell (id=InputS3Bucket_Cell) at InboundConfigPopup.pcf: line 66, column 60
    function value_19 () : java.lang.String {
      return s3InboundConfig.InputS3Bucket
    }
    
    // 'value' attribute on TextCell (id=InputS3Prefix_Cell) at InboundConfigPopup.pcf: line 70, column 60
    function value_22 () : java.lang.String {
      return s3InboundConfig.InputS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Bucket_Cell) at InboundConfigPopup.pcf: line 74, column 62
    function value_25 () : java.lang.String {
      return s3InboundConfig.ArchiveS3Bucket
    }
    
    // 'value' attribute on TextCell (id=ArchiveS3Prefix_Cell) at InboundConfigPopup.pcf: line 78, column 62
    function value_28 () : java.lang.String {
      return s3InboundConfig.ArchiveS3Prefix
    }
    
    // 'value' attribute on TextCell (id=ChunkSize_Cell) at InboundConfigPopup.pcf: line 84, column 52
    function value_31 () : java.lang.Integer {
      return s3InboundConfig.ChunkSize
    }
    
    // 'value' attribute on TextCell (id=HandlerClass_Cell) at InboundConfigPopup.pcf: line 90, column 63
    function value_36 () : java.lang.String {
      return s3InboundConfig.FileHandlerClass
    }
    
    // 'value' attribute on TextCell (id=DaysTillPurge_Cell) at InboundConfigPopup.pcf: line 96, column 52
    function value_41 () : java.lang.Integer {
      return s3InboundConfig.DaysTillPurge
    }
    
    property get s3InboundConfig () : entity.InboundS3FileConfig {
      return getIteratedValue(2) as entity.InboundS3FileConfig
    }
    
    
  }
  
  
}