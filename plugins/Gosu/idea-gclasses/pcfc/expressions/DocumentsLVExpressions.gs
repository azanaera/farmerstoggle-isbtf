package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 22, column 43
    function initialValue_0 () : java.util.Set<String> {
      return documentSearchCriteria.Claim.UndeletableDocumentPublicIds
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 27, column 52
    function initialValue_1 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Ext_Cell) at DocumentsLV.pcf: line 157, column 46
    function sortValue_10 (document :  entity.Document) : java.lang.Object {
      return document.ReceivedDate_Ext
    }
    
    // 'sortBy' attribute on LinkCell (id=Name) at DocumentsLV.pcf: line 59, column 25
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 118, column 45
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentsLV.pcf: line 123, column 51
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentsLV.pcf: line 128, column 36
    function sortValue_5 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentsLV.pcf: line 136, column 42
    function sortValue_6 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'sortBy' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 143, column 61
    function sortValue_7 (document :  entity.Document) : java.lang.Object {
      return document.Obsolete
    }
    
    // 'value' attribute on TextAreaCell (id=Description_Ext_Cell) at DocumentsLV.pcf: line 153, column 41
    function sortValue_9 (document :  entity.Document) : java.lang.Object {
      return document.Description
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 34, column 87
    function value_50 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return DocumentList
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 143, column 61
    function visible_8 () : java.lang.Boolean {
      return documentSearchCriteria.IncludeObsoletes
    }
    
    property get DocumentList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("DocumentList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set DocumentList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("DocumentList", 0, $arg)
    }
    
    property get documentSearchCriteria () : DocumentSearchCriteria {
      return getRequireValue("documentSearchCriteria", 0) as DocumentSearchCriteria
    }
    
    property set documentSearchCriteria ($arg :  DocumentSearchCriteria) {
      setRequireValue("documentSearchCriteria", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get undeletableDocumentPublicIds () : java.util.Set<String> {
      return getVariableValue("undeletableDocumentPublicIds", 0) as java.util.Set<String>
    }
    
    property set undeletableDocumentPublicIds ($arg :  java.util.Set<String>) {
      setVariableValue("undeletableDocumentPublicIds", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 67, column 87
    function action_16 () : void {
      ext.integration.helper.DocumentLVHelper_Ext.previewFromBox(document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 78, column 77
    function action_20 () : void {
      DocumentDetailsPopup.push(document)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 87, column 90
    function action_25 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 78, column 77
    function action_dest_21 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 67, column 87
    function available_15 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 78, column 77
    function available_19 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 87, column 90
    function available_23 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 39, column 34
    function condition_11 () : java.lang.Boolean {
      return perm.Document.edit(document)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 42, column 24
    function condition_12 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 45, column 35
    function condition_13 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(document) and documentsActionsHelper.isDeleteDocumentLinkAvailable(document, undeletableDocumentPublicIds)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at DocumentsLV.pcf: line 53, column 32
    function icon_14 () : java.lang.String {
      return document.Icon
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 87, column 90
    function icon_27 () : java.lang.String {
      return "document_download" 
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 67, column 87
    function label_17 () : java.lang.Object {
      return document.Name
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 111, column 75
    function label_29 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 67, column 87
    function tooltip_18 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 78, column 77
    function tooltip_22 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 87, column 90
    function tooltip_26 () : java.lang.String {
      return documentsActionsHelper.DownloadDocumentContentTooltip
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 118, column 45
    function valueRoot_31 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 118, column 45
    function value_30 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentsLV.pcf: line 123, column 51
    function value_33 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentsLV.pcf: line 128, column 36
    function value_36 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentsLV.pcf: line 136, column 42
    function value_39 () : java.util.Date {
      return document.DateModified
    }
    
    // 'value' attribute on TextAreaCell (id=Description_Ext_Cell) at DocumentsLV.pcf: line 153, column 41
    function value_44 () : java.lang.String {
      return document.Description
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Ext_Cell) at DocumentsLV.pcf: line 157, column 46
    function value_47 () : java.util.Date {
      return document.ReceivedDate_Ext
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 87, column 90
    function visible_24 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 111, column 75
    function visible_28 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(document)
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 143, column 61
    function visible_43 () : java.lang.Boolean {
      return documentSearchCriteria.IncludeObsoletes
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  
}